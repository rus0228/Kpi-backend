const getSqlForSalesRevenueProfitQty = (startTime, endTime, store, duration) => {
	const storeWhere = store !== '0' ? `AND ts.store_id = '${store}' ` : ``;
	let timeSelect = ``;
	let timeGroup = ``;
	if (duration > 365){
		timeSelect = `CONCAT(YEAR(tsp.created_date))`;
		timeGroup = `YEAR(tsp.created_date)`;
	}
	if (duration > 31 && duration <= 365){
		timeSelect = `CONCAT(YEAR(tsp.created_date), '-', MONTH(tsp.created_date))`;
		timeGroup = `MONTH(tsp.created_date)`
	}
	if (duration > 1 && duration <= 31){
		timeSelect = `CONCAT(MONTH(tsp.created_date), '-', DAY(tsp.created_date))`;
		timeGroup = `DAY(tsp.created_date)`
	}
	if (duration <= 1){
		timeSelect = `CONCAT(HOUR(tsp.created_date), ':00')`;
		timeGroup = `HOUR(tsp.created_date)`
	}
	const query =
		`SELECT `+
			`${timeSelect} AS time, ` +
			`SUM(tsp.subtotal) AS revenue, ` +
			`SUM(tsp.subtotal - tsp.cost_price * tsp.quantity - tsp.tax_val) AS profit, ` +
			`SUM(tsp.quantity) AS quantity ` +
		`FROM tbl_sales_product tsp ` +
		`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
		`WHERE tsp.created_date >= '${startTime}' ` +
			`AND tsp.created_date <= '${endTime}' ` +
			`${storeWhere}` +
		`GROUP BY ${timeGroup} ` +
		`ORDER BY tsp.created_date ASC;`;
	return query;
}
const getSqlForRepairsRevenueProfitQty = (startTime, endTime, store, duration) => {
	const storeWhere = store !== '0' ? `AND tr.store_id = '${store}' ` : ``;
	let timeSelect = ``;
	let timeGroup = ``;
	if (duration > 365){
		timeSelect = `CONCAT(YEAR(trp.created_date))`;
		timeGroup = `YEAR(trp.created_date)`;
	}
	if (duration > 31 && duration <= 365){
		timeSelect = `CONCAT(YEAR(trp.created_date), '-', MONTH(trp.created_date))`;
		timeGroup = `MONTH(trp.created_date)`
	}
	if (duration > 1 && duration <= 31){
		timeSelect = `CONCAT(MONTH(trp.created_date), '-', DAY(trp.created_date))`;
		timeGroup = `DAY(trp.created_date)`
	}
	if (duration <= 1){
		timeSelect = `CONCAT(HOUR(trp.created_date), ':00')`;
		timeGroup = `HOUR(trp.created_date)`
	}
	const query =
		`SELECT `+
			`${timeSelect} AS time, ` +
			`SUM(trp.subtotal) AS revenue, ` +
			`SUM(trp.subtotal - trp.cost_price * trp.quantity - trp.tax_val) AS profit, ` +
			`SUM(trp.quantity) AS quantity ` +
		`FROM tbl_repair_product trp ` +
		`INNER JOIN tbl_repair tr ON trp.repair_id = tr.id ` +
		`WHERE trp.created_date >= '${startTime}' ` +
			`AND trp.created_date <= '${endTime}' ` +
			`${storeWhere}` +
		`GROUP BY ${timeGroup} ` +
		`ORDER BY trp.created_date ASC;`;
	return query;
}
const getSqlForReturnsRevenueProfitQty = (startTime, endTime, store, duration) => {
	const storeWhere = store !== '0' ? `AND tr.store_id = '${store}' ` : ``;
	let timeSelect = ``;
	let timeGroup = ``;
	if (duration > 365){
		timeSelect = `CONCAT(YEAR(trp.created_date))`;
		timeGroup = `YEAR(trp.created_date)`;
	}
	if (duration > 31 && duration <= 365){
		timeSelect = `CONCAT(YEAR(trp.created_date), '-', MONTH(trp.created_date))`;
		timeGroup = `MONTH(trp.created_date)`
	}
	if (duration > 1 && duration <= 31){
		timeSelect = `CONCAT(MONTH(trp.created_date), '-', DAY(trp.created_date))`;
		timeGroup = `DAY(trp.created_date)`
	}
	if (duration <= 1){
		timeSelect = `CONCAT(HOUR(trp.created_date), ':00')`;
		timeGroup = `HOUR(trp.created_date)`
	}
	const query =
		`SELECT `+
			`${timeSelect} AS time, ` +
			`SUM(trp.subtotal) AS revenue, ` +
			`SUM(trp.subtotal - trp.cost_price * trp.quantity - trp.tax_val) AS profit, ` +
			`SUM(trp.quantity) AS quantity ` +
		`FROM tbl_returns_product trp ` +
		`INNER JOIN tbl_returns tr ON trp.return_id = tr.id ` +
		`WHERE trp.created_date >= '${startTime}' ` +
			`AND trp.created_date <= '${endTime}' ` +
			`${storeWhere}` +
		`GROUP BY ${timeGroup} ` +
		`ORDER BY trp.created_date ASC;`;
	return query;
}
const getSqlForPurchaseOrdersRevenueQty = (startTime, endTime, store, duration) => {
	const storeWhere = store !== '0' ? `AND tco.store_id = '${store}' ` : ``;
	let timeSelect = ``;
	let timeGroup = ``;
	if (duration > 365){
		timeSelect = `CONCAT(YEAR(tcop.created_date))`;
		timeGroup = `YEAR(tcop.created_date)`;
	}
	if (duration > 31 && duration <= 365){
		timeSelect = `CONCAT(YEAR(tcop.created_date), '-', MONTH(tcop.created_date))`;
		timeGroup = `MONTH(tcop.created_date)`
	}
	if (duration > 1 && duration <= 31){
		timeSelect = `CONCAT(MONTH(tcop.created_date), '-', DAY(tcop.created_date))`;
		timeGroup = `DAY(tcop.created_date)`
	}
	if (duration <= 1){
		timeSelect = `CONCAT(HOUR(tcop.created_date), ':00')`;
		timeGroup = `HOUR(tcop.created_date)`
	}
	const query =
		`SELECT `+
			`${timeSelect} AS time, ` +
			`SUM(tcop.subtotal) AS revenue, ` +
			`SUM(tcop.quantity) AS quantity ` +
		`FROM tbl_client_order_product tcop ` +
		`INNER JOIN tbl_client_orders tco ON tcop.client_id = tco.id ` +
		`WHERE tcop.created_date >= '${startTime}' ` +
			`AND tcop.created_date <= '${endTime}' ` +
			`${storeWhere}` +
		`GROUP BY ${timeGroup} ` +
		`ORDER BY tcop.created_date ASC;`;
	return query;

}

const getSqlForTotalData = (startTime, endTime, store) => {
	const salesStoreWhere = store !== '0' ? `AND ts.store_id = '${store}' ` : ``;
	const repairStoreWhere = store !== '0' ? `AND tr.store_id = '${store}' ` : ``;
	const returnsStoreWhere = store !== '0' ? `AND tr.store_id = '${store}' ` : ``;
	return `SELECT ` +
		`(SELECT SUM(tsp.subtotal) ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${startTime}' ` +
				`AND tsp.created_date <= '${endTime}' ` +
				`AND ts.is_deleted = '0' ` +
				`${salesStoreWhere}` +
				`AND (tsp.tax_val < 0 OR tsp.tax_val > 0)) AS sales_revenue_with_iva, ` +
		`(SELECT SUM(trp.subtotal) ` +
			`FROM tbl_repair_product trp ` +
			`INNER JOIN tbl_repair tr ON trp.repair_id = tr.id ` +
			`WHERE trp.created_date >= '${startTime}' ` +
				`AND trp.created_date <= '${endTime}' ` +
				`${repairStoreWhere}` +
				`AND (trp.tax_val < 0 OR trp.tax_val > 0)) AS repairs_revenue_with_iva, ` +
		`(SELECT SUM(trp.subtotal) ` +
			`FROM tbl_returns_product trp ` +
			`INNER JOIN tbl_returns tr ON trp.return_id = tr.id ` +
			`WHERE trp.created_date >= '${startTime}' ` +
				`AND trp.created_date <= '${endTime}' ` +
				`AND tr.is_deleted = '0' ` +
				`${returnsStoreWhere}` +
				`AND (trp.tax_val < 0 OR trp.tax_val > 0)) AS returns_revenue_with_iva, ` +
		`(SELECT SUM(tsp.subtotal) ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${startTime}' ` +
				`AND tsp.created_date <= '${endTime}' ` +
				`AND ts.is_deleted = '0' ` +
				`${salesStoreWhere}` +
				`AND tsp.tax_val = 0) AS sales_revenue_without_iva, ` +
		`(SELECT SUM(trp.subtotal) ` +
			`FROM tbl_repair_product trp ` +
			`INNER JOIN tbl_repair tr ON trp.repair_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`${repairStoreWhere}` +
				`and trp.tax_val = 0) as repairs_revenue_without_iva, ` +
		`(SELECT SUM(trp.subtotal) ` +
			`FROM tbl_returns_product trp ` +
			`INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`and tr.is_deleted = '0' ` +
				`${returnsStoreWhere}` +
				`and trp.tax_val = 0) as returns_revenue_without_iva, ` +
		`(SELECT SUM(tsp.price * tsp.quantity - tsp.cost_price * tsp.quantity - tsp.tax_val) ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
			`where tsp.created_date >= '${startTime}' ` +
				`and tsp.created_date <= '${endTime}' ` +
				`and ts.is_deleted = '0' ` +
				`${salesStoreWhere}` +
				`and (tsp.tax_val < 0 or tsp.tax_val > 0)) as sales_profit_with_iva, ` +
		`(SELECT SUM(trp.price * trp.quantity - trp.cost_price * trp.quantity - trp.tax_val) ` +
			`FROM tbl_repair_product trp ` +
			`INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`${repairStoreWhere}` +
				`and (trp.tax_val < 0 or trp.tax_val > 0)) as repairs_profit_with_iva, ` +
		`(SELECT SUM(trp.price * trp.quantity - trp.cost_price * trp.quantity - trp.tax_val) ` +
			`FROM tbl_returns_product trp ` +
			`INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`and tr.is_deleted = '0' ` +
				`${returnsStoreWhere}` +
				`and (trp.tax_val < 0 or trp.tax_val > 0)) as returns_profit_with_iva, ` +
		`(SELECT SUM(tsp.price * tsp.quantity - tsp.cost_price * tsp.quantity - tsp.tax_val) ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
			`where tsp.created_date >= '${startTime}' ` +
				`and tsp.created_date <= '${endTime}' ` +
				`and ts.is_deleted = '0' ` +
				`${salesStoreWhere}` +
				`and tsp.tax_val = 0) as sales_profit_without_iva, ` +
		`(SELECT SUM(trp.price * trp.quantity - trp.cost_price * trp.quantity - trp.tax_val) ` +
			`FROM tbl_repair_product trp ` +
			`INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`${repairStoreWhere}` +
				`and trp.tax_val = 0) as repairs_profit_without_iva, ` +
		`(SELECT SUM(trp.price * trp.quantity - trp.cost_price * trp.quantity - trp.tax_val) ` +
			`FROM tbl_returns_product trp ` +
			`INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`and tr.is_deleted = '0' ` +
				`${returnsStoreWhere}` +
				`and trp.tax_val = 0) as returns_profit_without_iva, ` +
		`(SELECT SUM(tsp.cost_price * tsp.quantity) ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
			`where tsp.created_date >= '${startTime}' ` +
				`and tsp.created_date <= '${endTime}' ` +
				`${salesStoreWhere}` +
				`and ts.is_deleted = '0') as sales_cost, ` +
		`(SELECT SUM(trp.cost_price * trp.quantity) ` +
			`FROM tbl_repair_product trp ` +
			`INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`${repairStoreWhere}` +
				`and trp.created_date <= '${endTime}') as repairs_cost, ` +
		`(SELECT SUM(trp.cost_price * trp.quantity) ` +
			`FROM tbl_returns_product trp ` +
			`INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`${returnsStoreWhere}` +
				`and tr.is_deleted = '0') as returns_cost, ` +
		`(SELECT SUM(tsp.total_tax_val) ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
			`where tsp.created_date >= '${startTime}' ` +
				`and tsp.created_date <= '${endTime}' ` +
				`${salesStoreWhere}` +
				`and ts.is_deleted = '0') as sales_iva, ` +
		`(SELECT SUM(trp.total_tax_val) ` +
			`FROM tbl_repair_product trp ` +
			`INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`${repairStoreWhere}` +
				`and trp.created_date <= '${endTime}') as repairs_iva, ` +
		`(SELECT SUM(trp.total_tax_val) ` +
			`FROM tbl_returns_product trp ` +
			`INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
			`where trp.created_date >= '${startTime}' ` +
				`and trp.created_date <= '${endTime}' ` +
				`${returnsStoreWhere}` +
				`and tr.is_deleted = '0') as returns_iva `;
}

const getSqlForNumberOfNewProducts = (startTime, endTime, preStartTime, preEndTime, store) => {
	const storeWhere = store !== '0' ? `AND tpts.store_id = '${store}' ` : ``;
	const current =
		`SELECT COUNT(tp.id) AS count ` +
		`FROM tbl_products tp ` +
		`INNER JOIN tbl_product_to_shop tpts ON tp.id = tpts.product_id ` +
		`WHERE tp.created_date >= '${startTime}' ` +
			`AND tp.created_date <= '${endTime}' ` +
			`${storeWhere};`;
	const prev =
		`SELECT COUNT(tp.id) AS count ` +
		`FROM tbl_products tp ` +
		`INNER JOIN tbl_product_to_shop tpts ON tp.id = tpts.product_id ` +
		`WHERE tp.created_date >= '${preStartTime}' ` +
			`AND tp.created_date <= '${preEndTime}' ` +
			`${storeWhere};`;
	return current + prev;
}

const getSqlForBestSellingProductsData = (startTime, endTime, preStartTime, preEndTime, store) => {
	const storeWhere = store !== '0' ? `AND ts.store_id = '${store}' ` : ``;
	const qtyQuery =
		`SELECT curQty.pId AS cur_pId, prevQty.pQty AS prev_pQty, curQty.pQty AS cur_pQty, curQty.pName AS cur_pName ` +
		`FROM (` +
			`SELECT tsp.product_id AS pId, SUM(tsp.quantity) AS pQty, tsp.product AS pName ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${startTime}' ` +
				`AND tsp.created_date <= '${endTime}' ` +
				`${storeWhere} ` +
			`GROUP BY pId ` +
			`ORDER BY pQty DESC ` +
			`LIMIT 5` +
		`) curQty ` +
		`LEFT JOIN (` +
			`SELECT tsp.product_id AS pId, SUM(tsp.quantity) AS pQty ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${preStartTime}' ` +
				`AND tsp.created_date <= '${preEndTime}' ` +
				`${storeWhere} ` +
			`GROUP BY pId ` +
		`) prevQty ON curQty.pId = prevQty.pId; `;

	const revenueQuery =
		`SELECT curRevenue.pId AS cur_pId, prevRevenue.pRevenue AS prev_pRevenue, curRevenue.pRevenue AS cur_pRevenue, curRevenue.pName AS cur_pName ` +
		`FROM (` +
			`SELECT tsp.product_id AS pId, SUM(tsp.subtotal) AS pRevenue, tsp.product AS pName ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${startTime}' ` +
				`AND tsp.created_date <= '${endTime}' ` +
				`${storeWhere} ` +
			`GROUP BY pId ` +
			`ORDER BY pRevenue DESC ` +
			`LIMIT 5` +
		`) curRevenue ` +
		`LEFT JOIN (` +
			`SELECT tsp.product_id AS pId, SUM(tsp.subtotal) AS pRevenue ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${preStartTime}' ` +
				`AND tsp.created_date <= '${preEndTime}' ` +
				`${storeWhere} ` +
			`GROUP BY pId ` +
		`) prevRevenue ON curRevenue.pId = prevRevenue.pId; `;

	const profitQuery =
		`SELECT curProfit.pId AS cur_pId, prevProfit.pProfit AS prev_pProfit, curProfit.pProfit AS cur_pProfit, curProfit.pName AS cur_pName ` +
		`FROM (` +
			`SELECT tsp.product_id AS pId, SUM(tsp.subtotal - tsp.cost_price * tsp.quantity) AS pProfit, tsp.product AS pName ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${startTime}' ` +
				`AND tsp.created_date <= '${endTime}' ` +
				`${storeWhere} ` +
			`GROUP BY pId ` +
			`ORDER BY pProfit DESC ` +
			`LIMIT 5` +
		`) curProfit ` +
		`LEFT JOIN (` +
			`SELECT tsp.product_id AS pId, SUM(tsp.subtotal - tsp.cost_price * tsp.quantity) AS pProfit ` +
			`FROM tbl_sales_product tsp ` +
			`INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
			`WHERE tsp.created_date >= '${preStartTime}' ` +
				`AND tsp.created_date <= '${preEndTime}' ` +
				`${storeWhere} ` +
			`GROUP BY pId ` +
		`) prevProfit ON curProfit.pId = prevProfit.pId; `;
	return qtyQuery + revenueQuery + profitQuery;
}

const getSqlForMostFrequentSuppliers = (startTime, endTime, preStartTime, preEndTime, store) => {
	const storeWhere = store !== '0' ? `AND pg.store_id = '${store}' ` : ``;
	const query =
		`SELECT current.quantity AS quantity, prev.quantity AS _quantity, current.name AS name ` +
		`FROM (` +
			`SELECT SUM(tp.quantity) AS quantity, ts.name AS name ` +
			`FROM ((tbl_purchase tp ` +
			`INNER JOIN tbl_supplier ts ON tp.supplier_id = ts.id) ` +
			`INNER JOIN purchase_group pg ON tp.purchase_group_id = pg.id) ` +
			`WHERE tp.created_date >= '${startTime}' ` +
				`AND tp.created_date <= '${endTime}' ` +
				`${storeWhere}` +
			`GROUP BY tp.supplier_id ` +
			`ORDER BY quantity DESC ` +
			`LIMIT 5` +
		`) current ` +
		`LEFT JOIN (` +
			`SELECT SUM(tp.quantity) AS quantity, ts.name AS name ` +
			`FROM ((tbl_purchase tp ` +
			`INNER JOIN tbl_supplier ts ON tp.supplier_id = ts.id) ` +
			`INNER JOIN purchase_group pg ON tp.purchase_group_id = pg.id) ` +
			`WHERE tp.created_date >= '${preStartTime}' ` +
				`AND tp.created_date <= '${preEndTime}' ` +
				`${storeWhere}` +
			`GROUP BY tp.supplier_id ` +
		`) prev ON current.name = prev.name`;
	return query;
}

const getSqlForMostPurchasedSuppliers = (startTime, endTime, preStartTime, preEndTime, store) => {
	const storeWhere = store !== '0' ? `AND pg.store_id = '${store}' ` : ``;
	const query =
		`SELECT current.total AS total, prev.total AS _total, current.name AS name ` +
		`FROM (` +
			`SELECT SUM(tp.total) AS total, ts.name AS name ` +
			`FROM ((tbl_purchase tp ` +
			`INNER JOIN tbl_supplier ts ON tp.supplier_id = ts.id) ` +
			`INNER JOIN purchase_group pg ON tp.purchase_group_id = pg.id) ` +
			`WHERE tp.created_date >= '${startTime}' ` +
				`AND tp.created_date <= '${endTime}' ` +
				`${storeWhere}` +
			`GROUP BY tp.supplier_id ` +
			`ORDER BY total DESC ` +
			`LIMIT 5` +
		`) current ` +
		`LEFT JOIN (` +
			`SELECT SUM(tp.total) AS total, ts.name AS name ` +
			`FROM ((tbl_purchase tp ` +
			`INNER JOIN tbl_supplier ts ON tp.supplier_id = ts.id) ` +
			`INNER JOIN purchase_group pg ON tp.purchase_group_id = pg.id) ` +
			`WHERE tp.created_date >= '${preStartTime}' ` +
				`AND tp.created_date <= '${preEndTime}' ` +
				`${storeWhere}` +
			`GROUP BY tp.supplier_id ` +
		`) prev ON current.name = prev.name`;

	return query;
}

const getSqlForPurchaseData = (startTime, endTime, store) => {
	const storeWhere = store !== '0' ? `AND pg.store_id = '${store}' ` : ``;
	const query =
		`SELECT CONCAT(YEAR(tp.created_date), '-', MONTH(tp.created_date)) AS month, SUM(tp.quantity) AS quantity, SUM(tp.total) AS value ` +
		`FROM tbl_purchase tp ` +
		`INNER JOIN purchase_group pg ON tp.purchase_group_id = pg.id ` +
		`WHERE tp.created_date >= '${startTime}' ` +
			`AND tp.created_date <= '${endTime}' ` +
			`${storeWhere}` +
		`GROUP BY YEAR(tp.created_date), MONTH(tp.created_date) ` +
		`ORDER BY tp.created_date ASC;`

	return query;
}

const getSqlForNumberOfNewClients = (startTime, endTime, preStartTime, preEndTime, store) => {
	const storeWhere = store !== '0' ? `AND tco.store_id = '${store}' ` : ``;
	const current =
		`SELECT COUNT(tc.id) AS count ` +
		`FROM tbl_client tc ` +
		`INNER JOIN tbl_client_orders tco ON tc.id = tco.client_id ` +
		`WHERE tc.created_date >= '${startTime}' ` +
			`AND tc.created_date <= '${endTime}' ` +
			`${storeWhere};`;
	const prev =
		`SELECT COUNT(tc.id) AS count ` +
		`FROM tbl_client tc ` +
		`INNER JOIN tbl_client_orders tco ON tc.id = tco.client_id ` +
		`WHERE tc.created_date >= '${preStartTime}' ` +
			`AND tc.created_date <= '${preEndTime}' ` +
			`${storeWhere};`;
	return current + prev;
}

const getSqlForMostSpentClientsData = (startTime, endTime, preStartTime, preEndTime, store) => {
	const storeWhere = store !== '0' ? `AND t.store_id = '${store}' ` : ``;
	const query =
		`SELECT t1.client_id, t1.spent, t2.spent AS _spent, tc.name ` +
		`FROM (` +
			`SELECT t.client_id, SUM(t.spent) AS spent ` +
			`FROM (` +
				`SELECT client_id, total_sales_euro AS spent, created_date, store_id ` +
				`FROM tbl_sales ` +
			`UNION ` +
				`SELECT client_id, total_euro AS spent, created_date, store_id ` +
				`FROM tbl_repair ` +
			`UNION ` +
				`SELECT client_id, total_euro AS spent, created_date, store_id ` +
				`FROM tbl_returns ` +
			`) t ` +
			`WHERE t.created_date >= '${startTime}' ` +
				`AND t.created_date <= '${endTime}' ` +
				`${storeWhere}` +
			`GROUP BY t.client_id ` +
			`ORDER BY spent DESC ` +
			`LIMIT 5 ` +
		`) t1 ` +
		`LEFT JOIN (` +
			`SELECT t.client_id, SUM(t.spent) AS spent ` +
			`FROM (` +
				`SELECT client_id, total_sales_euro AS spent, created_date, store_id ` +
				`FROM tbl_sales ` +
			`UNION ` +
				`SELECT client_id, total_euro AS spent, created_date, store_id ` +
				`FROM tbl_repair ` +
			`UNION ` +
				`SELECT client_id, total_euro AS spent, created_date, store_id ` +
				`FROM tbl_returns ` +
			`) t ` +
			`WHERE t.created_date >= '${preStartTime}' ` +
				`AND t.created_date <= '${preEndTime}' ` +
				`${storeWhere}` +
			`GROUP BY t.client_id ` +
		`) t2 ON t1.client_id = t2.client_id ` +
		`LEFT JOIN tbl_client tc ON t1.client_id = tc.id `
	return query;
}

const getSqlForRepeatedCustomerRate = (startTime, endTime, store) => {
	const storeWhere = store !== '0' ? `AND t.store_id = '${store}' ` : ``;
	const query =
		`SELECT COUNT(t.client_id) AS notRepeated ` +
		`FROM (` +
			`SELECT t.client_id, COUNT(t.client_id) AS counted ` +
			`FROM (` +
				`SELECT client_id, created_date, store_id ` +
				`FROM tbl_sales ` +
			`UNION ` +
				`SELECT client_id, created_date, store_id ` +
				`FROM tbl_repair ` +
			`UNION ` +
				`SELECT client_id, created_date, store_id ` +
				`FROM tbl_returns ` +
			`) t ` +
			`WHERE t.created_date >= '${startTime}' ` +
				`AND t.created_date <= '${endTime}' ` +
				`${storeWhere}` +
			`GROUP BY t.client_id ` +
		`) t ` +
		`WHERE t.counted = 1; ` +
		`SELECT COUNT(t.client_id) AS repeated ` +
		`FROM (` +
			`SELECT t.client_id, COUNT(t.client_id) AS counted ` +
			`FROM (` +
				`SELECT client_id, created_date, store_id ` +
				`FROM tbl_sales ` +
			`UNION ` +
				`SELECT client_id, created_date, store_id ` +
				`FROM tbl_repair ` +
			`UNION ` +
				`SELECT client_id, created_date, store_id ` +
				`FROM tbl_returns ` +
			`) t ` +
			`WHERE t.created_date >= '${startTime}' ` +
				`AND t.created_date <= '${endTime}' ` +
				`${storeWhere}` +
			`GROUP BY t.client_id ` +
		`) t ` +
		`WHERE t.counted > 1; `

	return query
}
const getSqlForSellPhoneData = (startTime, endTime) => {
	const query = `SELECT ` +
		`(SELECT COUNT(id) ` +
			`FROM tbl_sellmyphone_sold ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}') AS receivedOrders, ` +
		`(SELECT COUNT(id) ` +
			`FROM tbl_sellmyphone_sold ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}' ` +
				`AND status = 7) AS finishedOrders, ` +
		`(SELECT SUM(admin_price) ` +
			`FROM tbl_sellmyphone_sold ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}') AS totalPaidAmount, ` +
		`(SELECT SUM(admin_price) / COUNT(id) ` +
			`FROM tbl_sellmyphone_sold ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}') AS averageAmount, ` +
		`(SELECT SUM(UNIX_TIMESTAMP(modified_date) - UNIX_TIMESTAMP(created_date)) / count(id) ` +
			`FROM tbl_sellmyphone_sold ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}') AS averageTime`;
	return query;
}
const getSqlForSosData = (startTime, endTime, store) => {
	const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;
	const _storeWhere = store !== '0' ? `AND ts.store_id = '${store}' ` : ``;
	const query = `SELECT ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_sos ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`${storeWhere}) AS receivedOrders, ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_sos ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`AND status = 5 ` +
			`${storeWhere}) AS shippedOrders, ` +
		`(SELECT SUM(UNIX_TIMESTAMP(modified_date) - UNIX_TIMESTAMP(created_date)) / COUNT(id) ` +
		`FROM tbl_sos ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`AND status = 5 ` +
			`${storeWhere}) AS averageTime, ` +
		`(SELECT SUM(total_euro) ` +
		`FROM tbl_repair tr ` +
		`INNER JOIN tbl_sos ts ON tr.sos_id = ts.id ` +
		`WHERE ts.created_date >= '${startTime}' ` +
			`AND ts.created_date <= '${endTime}' ` +
			`${_storeWhere}) AS totalRevenue`;
	return query;
}

const getSqlForRepairData = (startTime, endTime, store) => {
	const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;
	const query = `SELECT ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`${storeWhere}) AS totalRepairs, ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`AND status = 5 ` +
			`${storeWhere}) AS completedRepairs, ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`AND status = 6 ` +
			`${storeWhere}) AS cancelledRepairs, ` +
		`(SELECT SUM(UNIX_TIMESTAMP(modified_date) - UNIX_TIMESTAMP(created_date)) / COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`AND status = 5 ` +
			`${storeWhere}) AS averageTime, ` +
		`(SELECT SUM(total_euro) / COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`${storeWhere}) AS averageValue`;
	return query;
}

const getSqlForRepairType = (startTime, endTime, store) => {
	const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;
	const query = `SELECT ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE type = 1 ` +
			`AND created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`${storeWhere}) AS repair, ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE type = 2 ` +
			`AND created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`${storeWhere}) AS warranty, ` +
		`(SELECT COUNT(id) ` +
		`FROM tbl_repair ` +
		`WHERE type = 2 ` +
			`AND created_date >= '${startTime}' ` +
			`AND created_date <= '${endTime}' ` +
			`${storeWhere}) AS sos`;
	return query;
}

const getSqlForMostInteractionData = (startTime, endTime, preStartTime, preEndTime, store) => {
	const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;
	const query =
		`SELECT current.count AS current, prev.count AS prev, current.uid ` +
		`FROM (` +
			`SELECT COUNT(user_id) AS count, user_id AS uid ` +
			`FROM tbl_status_history ` +
			`WHERE created_date >= '${startTime}' ` +
				`AND created_date <= '${endTime}' ` +
				`${storeWhere}` +
			`GROUP BY user_id ` +
			`ORDER BY count DESC ` +
			`LIMIT 5` +
		`) current ` +
		`LEFT JOIN (` +
			`SELECT COUNT(user_id) AS count, user_id AS uid ` +
			`FROM tbl_status_history ` +
			`WHERE created_date >= '${preStartTime}' ` +
				`AND created_date <= '${preEndTime}' ` +
				`${storeWhere}` +
			`GROUP BY user_id ` +
		`) prev ON current.uid = prev.uid`;

	return query;
}
module.exports = {
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
}
