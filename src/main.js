const {sprintf} = require('sprintf-js');
const dbConn = require('../config/database');
const moment = require('moment');
const {
	getSqlForSalesRevenueProfitQty,
	getSqlForRepairsRevenueProfitQty,
	getSqlForReturnsRevenueProfitQty,
	getSqlForPurchaseOrdersRevenueQty,
	getSqlForTotalData,

	getSqlForNumberOfNewProducts,
	getSqlForBestSellingProductsData,

	getSqlForPurchaseData,
	getSqlForMostFrequentSuppliers,
	getSqlForMostPurchasedSuppliers,

	getSqlForNumberOfNewClients,
	getSqlForMostSpentClientsData,
	getSqlForRepeatedCustomerRate,

	getSqlForSellPhoneData,
	getSqlForSosData,

	getSqlForRepairData,
	getSqlForRepairType,
	getSqlForMostInteractionData
} = require('./utils')


const getPreDuration = (startTime, endTime) => {
	const currentStart = moment(startTime);
	const currentEnd = moment(endTime);
	const currentDuration = currentEnd.diff(currentStart, 'days') + 1;
	const tempPreStart = currentStart.subtract(currentDuration, 'days');
	const preStart = tempPreStart.format('YYYY-MM-DD HH:mm:ss');
	return {
		startTime: preStart,
		endTime: startTime
	}
}

/******************************************
 * Category: Revenue / Profit / quantity
 ******************************************/
const getSalesRevenueProfitQty = (req, res) => {
	const startTime = req.query['startTime'];
	const endTime = req.query['endTime'];
	const store = req.query['store'];
	const duration = moment.duration(moment(endTime).diff(moment(startTime))).asDays();
	const sql = getSqlForSalesRevenueProfitQty(startTime, endTime, store, duration);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
};
const getRepairsRevenueProfitQty = (req, res) => {
	const startTime = req.query['startTime'];
	const endTime = req.query['endTime'];
	const store = req.query['store'];
	const duration = moment.duration(moment(endTime).diff(moment(startTime))).asDays();
	const sql = getSqlForRepairsRevenueProfitQty(startTime, endTime, store, duration);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
};
const getReturnsRevenueProfitQty = (req, res) => {
	const startTime = req.query['startTime'];
	const endTime = req.query['endTime'];
	const store = req.query['store'];
	const duration = moment.duration(moment(endTime).diff(moment(startTime))).asDays();
	const sql = getSqlForReturnsRevenueProfitQty(startTime, endTime, store, duration);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
};
const getPurchaseOrdersRevenueQty = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const duration = moment.duration(moment(endTime).diff(moment(startTime))).asDays();
	const sql = getSqlForPurchaseOrdersRevenueQty(startTime, endTime, store, duration);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
}
const getTotalData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;

	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;

	const sql = getSqlForTotalData(startTime, endTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		const preSql = getSqlForTotalData(preStartTime, preEndTime, store);
		dbConn.query(preSql, null, (_error, _result) => {
			if (_error){
				throw _error;
			}
			res && res.send({
				current: result[0],
				before: _result[0]
			});
		})
	})
}

/******************************************
 * Category: Products
 ******************************************/
const getNumberOfNewProducts = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForNumberOfNewProducts(startTime, endTime, preStartTime, preEndTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		res && res.send({
			current: result[0][0],
			prev: result[1][0]
		});
	})
}
const getBestSellingProductsData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;

	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;

	const sql = getSqlForBestSellingProductsData(startTime, endTime, preStartTime, preEndTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		res && res.send(result);
	})
}

/******************************************
 * Category: Purchases
 ******************************************/
const getMostFrequentSuppliers = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForMostFrequentSuppliers(startTime, endTime, preStartTime, preEndTime, store)
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
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForMostPurchasedSuppliers(startTime, endTime, preStartTime, preEndTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		res.send(result)
	})
}
const getPurchaseData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const sql = getSqlForPurchaseData(startTime, endTime, store)
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
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForNumberOfNewClients(startTime, endTime, preStartTime, preEndTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		res && res.send({
			current: result[0][0],
			prev: result[1][0]
		});
	})
}
const getMostSpentClientsData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForMostSpentClientsData(startTime, endTime, preStartTime, preEndTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
}

const getRepeatedCustomerRate = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForRepeatedCustomerRate(startTime, endTime, store);
	const _sql = getSqlForRepeatedCustomerRate(preStartTime, preEndTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		dbConn.query(_sql, null, (_error, _result) => {
			if (_error){
				throw _error;
			}
			res && res.send({
				current: {
					notRepeated: result[0][0]['notRepeated'],
					repeated: result[1][0]['repeated']
				},
				prev: {
					notRepeated: _result[0][0]['notRepeated'],
					repeated: _result[1][0]['repeated']
				}
			});
		})
	})
}

/******************************************
 * Category: Inventory losses
 ******************************************/
function getTotalRma(startTime, endTime, store){
	return new Promise((resolve, reject) => {
		const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;
		const sql = `SELECT SUM(total) AS totalRma ` +
			`FROM tbl_rma_group ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}' ` +
				`${storeWhere}`
		dbConn.query(sql, null, (error, result) => {
			if (error){
				reject(error);
			}
			resolve(parseFloat(result[0]['totalRma']));
		})
	})
}
function getLostRma(startTime, endTime, store){
	return new Promise((resolve, reject) => {
		const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;
		const sql = `SELECT SUM(total - refund_value) AS lostRma ` +
			`FROM tbl_rma_group ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}' ` +
				`${storeWhere}`
		dbConn.query(sql, null, (error, result) => {
			if (error){
				reject(error)
			}
			resolve(parseFloat(result[0]['lostRma']))
		})
	})
}
function getTotalLossesWithRma(startTime, endTime, store){
	return new Promise((resolve, reject) => {
		const storeWhere = store !== '0' ? `AND tsg.store_id = '${store}' ` : ``;
		const sql = `SELECT SUM(tp.last_purchase_price) AS totalLossesWithRma ` +
			`FROM tbl_products tp ` +
			`INNER JOIN tbl_shrinkage ts ON tp.id = ts.product_id ` +
			`INNER JOIN tbl_shrinkage_group tsg ON ts.shrinkage_group_id = tsg.id ` +
			`WHERE tp.deleted = '0' ` +
				`AND tp.modified_date >= '${startTime}' ` +
				`AND tp.modified_date <= '${endTime}' ` +
				`${storeWhere}` +
				`AND ts.rma != '0' `;
		dbConn.query(sql, null, (error, result) => {
			if (error){
				reject(error)
			}
			resolve(parseFloat(result[0]['totalLossesWithRma']));
		})
	})
}
function getTotalLossesWithoutRma(startTime, endTime, store){
	return new Promise((resolve, reject) => {
		const storeWhere = store !== '0' ? `AND tsg.store_id = '${store}' ` : ``;
		const sql = `SELECT SUM(tp.last_purchase_price) AS totalLossesWithoutRma ` +
			`FROM tbl_products tp ` +
			`INNER JOIN tbl_shrinkage ts ON tp.id = ts.product_id ` +
			`INNER JOIN tbl_shrinkage_group tsg ON ts.shrinkage_group_id = tsg.id ` +
			`WHERE tp.deleted = '0' ` +
				`AND tp.modified_date >= '${startTime}' ` +
				`AND tp.modified_date <= '${endTime}' ` +
				`${storeWhere}` +
				`AND ts.rma = 0 `;
		dbConn.query(sql, null, (error, result) => {
			if (error){
				reject(error);
			}
			resolve(parseFloat(result[0]['totalLossesWithoutRma']));
		})
	})
}

const getInventoryLossesData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;

	const kind = req.query.kind
	/***
	 * We will send kind parameter for kind, which means inventory sub tab value
	 ***/

	if (kind === 'totalRma'){
		getTotalRma(startTime, endTime, store).then((response) => {
			getTotalRma(preStartTime, preEndTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}
	if (kind === 'lostRma'){
		getLostRma(startTime, endTime, store).then((response) => {
			getLostRma(preStartTime, preEndTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}
	if (kind === 'totalLossesWithRma'){
		getTotalLossesWithRma(startTime, endTime, store).then((response) => {
			getTotalLossesWithRma(preStartTime, preEndTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}
	if (kind === 'totalLossesWithoutRma'){
		getTotalLossesWithoutRma(startTime, endTime, store).then((response) => {
			getTotalLossesWithoutRma(preStartTime, preEndTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}

	if (kind === 'totalLosses'){
		getLostRma(startTime, endTime, store).then((lostRma) => {
			getLostRma(preStartTime, preEndTime, store).then((_lostRma) => {
				getTotalLossesWithoutRma(startTime, endTime, store).then((withOut) => {
					getTotalLossesWithoutRma(preStartTime, preEndTime, store).then((_withOut) => {
						res && res.send({
							current: parseFloat(lostRma) + parseFloat(withOut),
							prev: parseFloat(_lostRma) + parseFloat(_withOut)
						})
					});
				});
			});
		});
	}
}


/******************************************
 * Category: Sell my phone
 ******************************************/
const getSellPhoneData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForSellPhoneData(startTime, endTime);
	const preSql = getSqlForSellPhoneData(preStartTime, preEndTime)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		dbConn.query(preSql, null, (preError, preResult) => {
			if (preError){
				throw preError;
			}
			res && res.send({
				current: result[0],
				prev: preResult[0]
			});
		})
	})
}

/******************************************
 * Category: SOS
 ******************************************/
const getSosData = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const store = req.query.store;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForSosData(startTime, endTime, store);
	const preSql = getSqlForSosData(preStartTime, preEndTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		dbConn.query(preSql, null, (preError, preResult) => {
			if (preError) {
				throw preError;
			}
			res && res.send({
				current: result[0],
				prev: preResult[0]
			})
		})
	})
}

/******************************************
 * Category: Customer Satisfy
 ******************************************/
const getCustomerEvaluation = (req, res) => {
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = `SELECT current.count AS current, prev.count AS prev, current.rating ` +
		`FROM (` +
			`SELECT COUNT(id) AS count, star_rating AS rating ` +
			`FROM tbl_contacts ` +
			`WHERE created_date > '${startTime}' ` +
				`AND created_date < '${endTime}' ` +
				`AND star_rating != 'null' ` +
			`GROUP BY star_rating` +
		`) current ` +
		`LEFT JOIN (` +
			`SELECT COUNT(id) AS count, star_rating AS rating ` +
			`FROM tbl_contacts ` +
			`WHERE created_date > '${preStartTime}' ` +
				`AND created_date < '${preEndTime}' ` +
				`AND star_rating != 'null' ` +
			`GROUP BY star_rating` +
		`) prev ON current.rating = prev.rating;`
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		res && res.send(result);
	})
}

/******************************************
 * Category: Repairs
 ******************************************/
const getRepairData = (req, res) => {
	const store = req.query.store;
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;

	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;

	const sql = getSqlForRepairData(startTime, endTime, store);
	const preSql = getSqlForRepairData(preStartTime, preEndTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		dbConn.query(preSql, null, (preError, preResult) => {
			if (preError){
				throw preError;
			}
			res && res.send({
				current: result[0],
				prev: preResult[0]
			})
		})
	})
}

const getRepairType = (req, res) => {
	const store = req.query.store;
	const startTime = req.query.startTime;
	const endTime= req.query.endTime;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;

	const sql =  getSqlForRepairType(startTime, endTime, store);
	const preSql = getSqlForRepairType(preStartTime, preEndTime, store);

	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		dbConn.query(preSql, null, (preError, preResult) => {
			if (preError){
				throw preError;
			}
			res && res.send({
				repair: result[0]['repair'],
				warranty: result[0]['warranty'],
				sos: result[0]['sos'],
				_repair: preResult[0]['repair'],
				_warranty: preResult[0]['warranty'],
				_sos: preResult[0]['sos'],
			})
		})
	})
}

const getMostInteractionData = (req, res) => {
	const store = req.query.store;
	const startTime = req.query.startTime;
	const endTime = req.query.endTime;
	const preDuration = getPreDuration(startTime, endTime);
	const preStartTime = preDuration.startTime;
	const preEndTime = preDuration.endTime;
	const sql = getSqlForMostInteractionData(startTime, endTime, preStartTime, preEndTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res.send(result);
	})
}

module.exports = {
	getSalesRevenueProfitQty,
	getRepairsRevenueProfitQty,
	getReturnsRevenueProfitQty,
	getPurchaseOrdersRevenueQty,
	getTotalData,

	getNumberOfNewProducts,
	getBestSellingProductsData,
	getNumberOfNewClients,
	getMostSpentClientsData,
	getRepeatedCustomerRate,

	getInventoryLossesData,

	getSellPhoneData,
	getSosData,

	getRepairData,
	getRepairType,
	getMostInteractionData,
	getCustomerEvaluation,

	getMostFrequentSuppliers,
	getMostPurchasedSuppliers,
	getPurchaseData
};
