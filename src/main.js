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

/******************************************
 * Demo User
 ******************************************/
const getCurrentUser = (req, res) => {
	res.send({
		success: true,
		data: {
			name: 'Pedro',
			avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
			userid: '00000001',
			email: 'antdesign@alipay.com',
			signature: '',
			title: '',
			group: '',
			access: 'admin',
		},
	});
}
/******************************************
 * Get common parameters
 ******************************************/
const getCommonParams = (e) => {
	const startTime = e.query['startTime'];
	const endTime = e.query['endTime'];
	const _startTime = e.query['_startTime'];
	const _endTime = e.query['_endTime'];
	const store = e.query['store'];
	return {
		startTime: startTime,
		endTime: endTime,
		_startTime: _startTime,
		_endTime: _endTime,
		store: store
	}
}

/******************************************
 * Category: Revenue / Profit / quantity
 ******************************************/
const getSalesRevenueProfitQty = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;

	const sql = getSqlForTotalData(startTime, endTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		const _sql = getSqlForTotalData(_startTime, _endTime, store);
		dbConn.query(_sql, null, (_error, _result) => {
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForNumberOfNewProducts(startTime, endTime, _startTime, _endTime, store);
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;

	const sql = getSqlForBestSellingProductsData(startTime, endTime, _startTime, _endTime, store)
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForMostFrequentSuppliers(startTime, endTime, _startTime, _endTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result)
		res.send(result)
	})
}
const getMostPurchasedSuppliers = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForMostPurchasedSuppliers(startTime, endTime, _startTime, _endTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		res.send(result)
	})
}
const getPurchaseData = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForNumberOfNewClients(startTime, endTime, _startTime, _endTime, store)
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForMostSpentClientsData(startTime, endTime, _startTime, _endTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res && res.send(result);
	})
}

const getRepeatedCustomerRate = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForRepeatedCustomerRate(startTime, endTime, store);
	const _sql = getSqlForRepeatedCustomerRate(_startTime, _endTime, store);
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;

	const kind = req.query.kind
	/***
	 * We will send kind parameter for kind, which means inventory sub tab value
	 ***/

	if (kind === 'totalRma'){
		getTotalRma(startTime, endTime, store).then((response) => {
			getTotalRma(_startTime, _endTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}
	if (kind === 'lostRma'){
		getLostRma(startTime, endTime, store).then((response) => {
			getLostRma(_startTime, _endTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}
	if (kind === 'totalLossesWithRma'){
		getTotalLossesWithRma(startTime, endTime, store).then((response) => {
			getTotalLossesWithRma(_startTime, _endTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}
	if (kind === 'totalLossesWithoutRma'){
		getTotalLossesWithoutRma(startTime, endTime, store).then((response) => {
			getTotalLossesWithoutRma(_startTime, _endTime, store).then((_response) => {
				res && res.send({
					current: response,
					prev: _response
				})
			});
		});
	}

	if (kind === 'totalLosses'){
		getLostRma(startTime, endTime, store).then((lostRma) => {
			getLostRma(_startTime, _endTime, store).then((_lostRma) => {
				getTotalLossesWithoutRma(startTime, endTime, store).then((withOut) => {
					getTotalLossesWithoutRma(_startTime, _endTime, store).then((_withOut) => {
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForSellPhoneData(startTime, endTime);
	const _sql = getSqlForSellPhoneData(_startTime, _endTime)
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		dbConn.query(_sql, null, (_error, _result) => {
			if (_error){
				throw _error;
			}
			res && res.send({
				current: result[0],
				prev: _result[0]
			});
		})
	})
}

/******************************************
 * Category: SOS
 ******************************************/
const getSosData = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForSosData(startTime, endTime, store);
	const _sql = getSqlForSosData(_startTime, _endTime, store)
	dbConn.query(sql, null, (error, result) => {
		if (error) {
			throw error;
		}
		dbConn.query(_sql, null, (_error, _result) => {
			if (_error) {
				throw _error;
			}
			res && res.send({
				current: result[0],
				prev: _result[0]
			})
		})
	})
}

/******************************************
 * Category: Customer Satisfy
 ******************************************/
const getCustomerEvaluation = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = `SELECT current.count AS current, prev.count AS prev, current.rating ` +
		`FROM (` +
			`SELECT COUNT(id) AS count, star_rating AS rating ` +
			`FROM tbl_contacts ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}' ` +
				`AND star_rating != 'null' ` +
			`GROUP BY star_rating` +
		`) current ` +
		`LEFT JOIN (` +
			`SELECT COUNT(id) AS count, star_rating AS rating ` +
			`FROM tbl_contacts ` +
			`WHERE created_date >= '${_startTime}' ` +
				`AND created_date <= '${_endTime}' ` +
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
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;

	const sql = getSqlForRepairData(startTime, endTime, store);
	const _sql = getSqlForRepairData(_startTime, _endTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		dbConn.query(_sql, null, (_error, _result) => {
			if (_error){
				throw _error;
			}
			res && res.send({
				current: result[0],
				prev: _result[0]
			})
		})
	})
}

const getRepairType = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;

	const sql =  getSqlForRepairType(startTime, endTime, store);
	const _sql = getSqlForRepairType(_startTime, _endTime, store);

	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		dbConn.query(_sql, null, (_error, _result) => {
			if (_error){
				throw _error;
			}
			res && res.send({
				repair: result[0]['repair'],
				warranty: result[0]['warranty'],
				sos: result[0]['sos'],
				_repair: _result[0]['repair'],
				_warranty: _result[0]['warranty'],
				_sos: _result[0]['sos'],
			})
		})
	})
}

const getMostInteractionData = (req, res) => {
	const commonParams = getCommonParams(req);
	const {startTime, endTime, _startTime, _endTime, store} = commonParams;
	const sql = getSqlForMostInteractionData(startTime, endTime, _startTime, _endTime, store);
	dbConn.query(sql, null, (error, result) => {
		if (error){
			throw error;
		}
		console.log(result);
		res.send(result);
	})
}

module.exports = {
	getCurrentUser,
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
