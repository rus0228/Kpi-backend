const axios = require('axios');
const {sprintf} = require('sprintf-js');
const dbConn = require('../config/database');
const moment = require('moment')
const lodash = require('lodash')
const {
	getSqlForRevenueProfitQty,
	getSqlForPurchasedOrdersData,
	getSqlForTotalCostIva,
	getSqlForTotalValue,
	getSqlForTotalAndLostRmaData
} = require('./utils')

/******************************************
 * Category: Revenue / Profit / quantity
 ******************************************/
const getRevenueProfitQty = (req, res) => {
	const startTime = req.query['startTime'];
	const endTime = req.query['endTime'];
	const store = req.query['store'];
	const productTypes = JSON.parse(req.query['productTypes'])
	const mStart = moment(startTime);
	const mEnd = moment(endTime);
	const duration = moment.duration(mEnd.diff(mStart)).asDays();
	const sql = getSqlForRevenueProfitQty(startTime, endTime, productTypes, duration, store);
	let buffer = []
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		for(let k = 0; k < result.length; k++){
			if (result[k].length > 0){
				for (let l = 0; l < result[k].length; l++){
					buffer.push(result[k][l])
				}
			}else {
				buffer.push(result[k])
			}
		}
		res && res.send(lodash.groupBy(buffer, 'time'));
	})
};
const getPurchasedOrdersData = (req, res) => {
	const startTime = req.query['startTime'];
	const endTime = req.query['endTime'];
	const store = req.query['store'];
	const mStart = moment(startTime);
	const mEnd = moment(endTime);
	const duration = moment.duration(mEnd.diff(mStart)).asDays();
	const sql = getSqlForPurchasedOrdersData(startTime, endTime, store, duration);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
}
const getTotalCostIva = (req, res) => {
	const startTime = req.query['startTime'];
	const endTime = req.query['endTime'];
	const store = req.query['store'];
	const sql = getSqlForTotalCostIva(startTime, endTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result[0]);
	})
}
const getTotalValue = (req, res) => {
	const store = req.query.store;
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const sql = getSqlForTotalValue(startTime, endTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		const totalRevenueWithIva = parseFloat(result[0]['sales_iva']) - parseFloat(result[0]['returns_iva']) + parseFloat(result[0]['repairs_iva']);
		const totalRevenueWithoutIva = parseFloat(result[0]['sales']) - parseFloat(result[0]['returns']) + parseFloat(result[0]['repairs']);
		const totalRevenue = totalRevenueWithIva + totalRevenueWithoutIva;
		const totalProfitWithIva = parseFloat(result[0]['sales_profit_iva']) - parseFloat(result[0]['returns_profit_iva']) + parseFloat(result[0]['repairs_profit_iva']);
		const totalProfitWithoutIva = parseFloat(result[0]['sales_profit']) - parseFloat(result[0]['returns_profit']) + parseFloat(result[0]['repairs_profit']);
		const totalProfit = totalProfitWithIva + totalProfitWithoutIva;
		const sendData  = {
			'totalRevenueWithIva': totalRevenueWithIva,
			'totalRevenueWithoutIva': totalRevenueWithoutIva,
			'totalRevenue': totalRevenue,
			'totalProfitWithIva': totalProfitWithIva,
			'totalProfitWithoutIva': totalProfitWithoutIva,
			'totalProfit': totalProfit
		}
		console.log(sendData);
		res && res.send(sendData);
	})
}

/******************************************
 * Category: Products
 ******************************************/
const getNumberOfNewProducts = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	let sql = '';
	if (store === '0'){
		sql = `select count(tp.id) as count from tbl_products tp inner join tbl_product_to_shop tpts on tp.id = tpts.product_id ` +
			`where tp.created_date >= '${startTime}' and tp.created_date <= '${endTime}'`;
	}else {
		sql = `select count(tp.id) as count from tbl_products tp inner join tbl_product_to_shop tpts on tp.id = tpts.product_id ` +
			`where tp.created_date >= '${startTime}' and tp.created_date <= '${endTime}' and tpts.store_id = '${store}'`;
	}
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		res && res.send(result[0]);
	})
}
const getBestSellingProductsData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	let sql = '';
	if (store === '0'){
		sql =
			`select tsp.product_id as pId, sum(tsp.quantity) as pQty, tsp.product as pName from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
			` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' group by pId order by pQty desc limit 5;` +

			`select tsp.product_id as pId, sum(tsp.subtotal) as pRevenue, tsp.product as pName from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
			` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' group by pId order by pRevenue desc limit 5;` +

			`select tsp.product_id as pId, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as pProfit, tsp.product as pName from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
			` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' group by pId order by pProfit desc limit 5;`
	}else {
		sql =
			`select tsp.product_id as pId, sum(tsp.quantity) as pQty, tsp.product as pName from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
			` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}' group by pId order by pQty desc limit 5;` +

			`select tsp.product_id as pId, sum(tsp.subtotal) as pRevenue, tsp.product as pName from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
			` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}' group by pId order by pRevenue desc limit 5;` +

			`select tsp.product_id as pId, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as pProfit, tsp.product as pName from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
			` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}' group by pId order by pProfit desc limit 5;`
	}

	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})

}

/******************************************
 * Category: Purchases
 ******************************************/
const getMostFrequentSuppliers = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const sql = 'select sum(quantity) as quantity, ts.name as name ' +
		'from tbl_purchase tp inner join tbl_supplier ts on tp.supplier_id = ts.id ' +
		`where tp.created_date >= '${startTime}' and tp.created_date <= '${endTime}' ` +
		'group by tp.supplier_id order by quantity desc limit 5;'
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result)
		res.send(result)
	})
}
const getMostPurchasedSuppliers = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const sql = 'select sum(total) as value, ts.name as name ' +
		'from tbl_purchase tp inner join tbl_supplier ts on tp.supplier_id = ts.id ' +
		`where tp.created_date >= '${startTime}' and tp.created_date <= '${endTime}' ` +
		'group by tp.supplier_id order by value desc limit 5;';
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result)
		res.send(result)
	})
}
const getPurchaseData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	let sql = '';
	if (store === '0'){
		sql = `select concat(year(tp.created_date), '-', month(tp.created_date)) as month, sum(tp.quantity) as quantity, sum(tp.total) as value` +
			` from tbl_purchase tp inner join purchase_group pg on tp.purchase_group_id = pg.id` +
			` where tp.created_date >= '${startTime}' and tp.created_date <= '${endTime}'` +
			` group by year(tp.created_date), month(tp.created_date) order by tp.created_date asc`;
	}else {
		sql = `select concat(year(tp.created_date), '-', month(tp.created_date)) as month, sum(tp.quantity) as quantity, sum(tp.total) as value` +
			` from tbl_purchase tp inner join purchase_group pg on tp.purchase_group_id = pg.id` +
			` where tp.created_date >= '${startTime}' and tp.created_date <= '${endTime}' and pg.store_id = '${store}'` +
			` group by year(tp.created_date), month(tp.created_date) order by tp.created_date asc`;
	}
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		res.send(result)
	})
}

/******************************************
 * Category: Clients
 ******************************************/
const getNumberOfNewClients = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	let sql = '';
	if (store === '0'){
		sql = `select count(tc.id) as count from tbl_client tc inner join tbl_client_orders tco on tc.id = tco.client_id ` +
			`where tc.created_date >= '${startTime}' and tc.created_date <= '${endTime}'`;
	}else {
		sql = `select count(tc.id) as count from tbl_client tc inner join tbl_client_orders tco on tc.id = tco.client_id ` +
			`where tc.created_date >= '${startTime}' and tc.created_date <= '${endTime}' and tco.store_id = '${store}'`;
	}
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result[0]);
	})
}
const getMostSpentClientsData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const sql = `select id, name, total_spent from tbl_client ` +
		` where last_action_date <= '${endTime}' and client_since >= '${startTime}' ` +
		` order by total_spent desc limit 5`;

	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
}

/******************************************
 * Category: Inventory losses
 ******************************************/
const getTotalAndLostRmaData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const sql = getSqlForTotalAndLostRmaData(startTime, endTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
}
const getTotalLossesData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const sql = `select ` +
		`(select sum(tp.last_purchase_price) ` +
		`from tbl_products tp inner join tbl_shrinkage ts on ts.product_id = tp.id ` +
		`where ts.rma > 0 and ts.created_date > '${startTime}' and ts.created_date < '${endTime}') as withRma,` +
		`(select sum(tp.last_purchase_price) ` +
		`from tbl_products tp inner join tbl_shrinkage ts on ts.product_id = tp.id ` +
		`where ts.rma = 0 and ts.created_date > '${startTime}' and ts.created_date < '${endTime}') as withoutRma;`

	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}

		res && res.send(result);
	})
}

/******************************************
 * Category: Sell my phone
 ******************************************/
const getSellPhoneData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const sql = `select count(id) as number from tbl_sellmyphone_sold where created_date >= '${startTime}' and created_date <= '${endTime}';` +
		`select count(id) as number from tbl_sellmyphone_sold where created_date >= '${startTime}' and created_date <= '${endTime}' and status = 7;`;
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		console.log(result);
		res.send(result);
	})
}
const getCustomSellPhoneData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const sql = `select sum(admin_price) as total_amount from tbl_sellmyphone_sold where modified_date > '${startTime}' and modified_date < '${endTime}';` +
		`select sum(admin_price) / count(id) as average_amount from tbl_sellmyphone_sold where modified_date > '${startTime}' and modified_date < '${endTime}';` +
		`select sum(unix_timestamp(modified_date) - unix_timestamp(created_date)) / count(id) as average_time from tbl_sellmyphone_sold where status = 7 and  modified_date > '${startTime}' and modified_date < '${endTime}';`
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		const dataSend = {
			total_amount: result[0][0]['total_amount'],
			average_amount: result[1][0]['average_amount'],
			average_time: result[2][0]['average_time']
		}
		res.send(dataSend);
	})
}

/******************************************
 * Category: SOS
 ******************************************/
const getSosData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const sql = `select count(id) as number from tbl_sos where created_date >= '${startTime}' and created_date <= '${endTime}';` +
		`select count(id) as number from tbl_sos where created_date >= '${startTime}' and created_date <= '${endTime}' and status = 5;`;
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		console.log(result);
		res.send(result);
	})
}
const getSosCustomData = (req, res) => {
	const sql = 'select sum(unix_timestamp(modified_date) - unix_timestamp(created_date)) / count(id) as average_time from tbl_sos where status = 5;' +
		'select sum(total_euro) as total_revenue from tbl_repair tr inner join tbl_sos ts on tr.sos_id = ts.id;'
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		console.log(result);
		const sendData = {
			average_time: result[0][0]['average_time'],
			total_revenue: result[1][0]['total_revenue']
		}
		res.send(sendData);
	})
}

/******************************************
 * Category: Customer Satisfy
 ******************************************/
const getCustomerEvaluation = (req, res) => {
	const sql = 'select count(id) as count, star_rating from tbl_contacts group by star_rating;'
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		console.log(result);
		res.send(result);
	})
}

/******************************************
 * Category: Repairs
 ******************************************/
const getNumberOfRepairs = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const sql = `select count(id) as count, status from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}' group by status;` +
		`select count(id) as completed from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}' and status = 5;` +
		`select count(id) as cancelled from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}' and status = 6;` +
		`select sum(unix_timestamp(modified_date) - unix_timestamp(created_date)) / count(id) as average_time_repair from tbl_repair where status = 5;` +
		`select sum(total_euro) / count(id) as average_value_repair from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}';`;
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
}
const getRepairType = (req, res) => {
	const sql = 'select count(id) as type from tbl_repair where type = 1;' +
		'select count(id) as type from tbl_repair where type = 2;' +
		'select count(id) as type from tbl_repair where type = 3;';
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res.send(result);
	})
}


module.exports = {
	getRevenueProfitQty,
	getPurchasedOrdersData,
	getTotalCostIva,
	getTotalValue,
	getNumberOfNewProducts,
	getBestSellingProductsData,
	getNumberOfNewClients,
	getMostSpentClientsData,
	getTotalAndLostRmaData,
	getTotalLossesData,
	getNumberOfRepairs,
	getRepairType,
	getCustomerEvaluation,
	getSosData,
	getSosCustomData,
	getSellPhoneData,
	getCustomSellPhoneData,
	getMostFrequentSuppliers,
	getMostPurchasedSuppliers,
	getPurchaseData
};
