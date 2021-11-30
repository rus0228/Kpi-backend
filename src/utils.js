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
            `SUM(tsp.subtotal - (tsp.cost_price * tsp.quantity) - tsp.total_tax_val) AS profit, ` +
            `SUM(tsp.quantity) AS quantity ` +
        `FROM tbl_sales_product tsp ` +
        `INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
        `WHERE tsp.created_date >= '${startTime}' ` +
            `AND tsp.created_date <= '${endTime}' ` +
            `AND ts.is_deleted = '0' ` +
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
            `SUM(trp.subtotal - (trp.cost_price * trp.quantity) - trp.total_tax_val) AS profit, ` +
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
            `SUM(trp.subtotal - (trp.cost_price * trp.quantity) - trp.total_tax_val) AS profit, ` +
            `SUM(trp.quantity) AS quantity ` +
        `FROM tbl_returns_product trp ` +
        `INNER JOIN tbl_returns tr ON trp.return_id = tr.id ` +
        `WHERE trp.created_date >= '${startTime}' ` +
            `AND trp.created_date <= '${endTime}' ` +
            `AND tr.is_deleted = '0' ` + 
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
            `AND tco.status != "canceled"  ` +
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
                `AND (tsp.tax_val < 0 OR tsp.tax_val > 0)) AS sales_revenue_with_iva, ` + // total de vendas faturadas
        `(SELECT SUM(trp.subtotal) ` +
            `FROM tbl_repair_product trp ` +
            `INNER JOIN tbl_repair tr ON trp.repair_id = tr.id ` +
            `WHERE trp.created_date >= '${startTime}' ` +
                `AND trp.created_date <= '${endTime}' ` +
                `${repairStoreWhere}` +
                `AND (trp.tax_val < 0 OR trp.tax_val > 0)) AS repairs_revenue_with_iva, ` + // total de reps faturadas
        `(SELECT SUM(trp.subtotal) ` +
            `FROM tbl_returns_product trp ` +
            `INNER JOIN tbl_returns tr ON trp.return_id = tr.id ` +
            `WHERE trp.created_date >= '${startTime}' ` +
                `AND trp.created_date <= '${endTime}' ` +
                `AND tr.is_deleted = '0' ` +
                `${returnsStoreWhere}` +
                `AND (trp.tax_val < 0 OR trp.tax_val > 0)) AS returns_revenue_with_iva, ` + // total de devoluções faturadas
        `(SELECT SUM(tsp.subtotal) ` +
            `FROM tbl_sales_product tsp ` +
            `INNER JOIN tbl_sales ts ON tsp.sale_id = ts.id ` +
            `WHERE tsp.created_date >= '${startTime}' ` +
                `AND tsp.created_date <= '${endTime}' ` +
                `AND ts.is_deleted = '0' ` +
                `${salesStoreWhere}` +
                `AND tsp.tax_val = 0) AS sales_revenue_without_iva, ` + // total de vendas não faturadas
        `(SELECT SUM(trp.subtotal) ` +
            `FROM tbl_repair_product trp ` +
            `INNER JOIN tbl_repair tr ON trp.repair_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `${repairStoreWhere}` +
                `and trp.tax_val = 0) as repairs_revenue_without_iva, ` + // total de reparações não faturadas
        `(SELECT SUM(trp.subtotal) ` +
            `FROM tbl_returns_product trp ` +
            `INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `and tr.is_deleted = '0' ` +
                `${returnsStoreWhere}` +
                `and trp.tax_val = 0) as returns_revenue_without_iva, ` + // total de devoluções não faturadas
        `(SELECT SUM((tsp.price * tsp.quantity) - (tsp.cost_price * tsp.quantity) - tsp.total_tax_val) ` +
            `FROM tbl_sales_product tsp ` +
            `INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
            `where tsp.created_date >= '${startTime}' ` +
                `and tsp.created_date <= '${endTime}' ` +
                `and ts.is_deleted = '0' ` +
                `${salesStoreWhere}` +
                `and (tsp.tax_val < 0 or tsp.tax_val > 0)) as sales_profit_with_iva, ` + // total de lucro vendas faturadas
        `(SELECT SUM((trp.price * trp.quantity) - (trp.cost_price * trp.quantity) - trp.total_tax_val) ` +
            `FROM tbl_repair_product trp ` +
            `INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `${repairStoreWhere}` +
                `and (trp.tax_val < 0 or trp.tax_val > 0)) as repairs_profit_with_iva, ` + // total de lucro reparações faturadas
        `(SELECT SUM((trp.price * trp.quantity) - (trp.cost_price * trp.quantity) - trp.total_tax_val) ` +
            `FROM tbl_returns_product trp ` +
            `INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `and tr.is_deleted = '0' ` +
                `${returnsStoreWhere}` +
                `and (trp.tax_val < 0 or trp.tax_val > 0)) as returns_profit_with_iva, ` +  // total de lucro devoluções faturadas
        `(SELECT SUM((tsp.price * tsp.quantity) - (tsp.cost_price * tsp.quantity) - tsp.total_tax_val) ` +
            `FROM tbl_sales_product tsp ` +
            `INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
            `where tsp.created_date >= '${startTime}' ` +
                `and tsp.created_date <= '${endTime}' ` +
                `and ts.is_deleted = '0' ` +
                `${salesStoreWhere}` +
                `and tsp.tax_val = 0) as sales_profit_without_iva, ` + // total de lucro vendas não faturadas
        `(SELECT SUM((trp.price * trp.quantity) - (trp.cost_price * trp.quantity) - trp.total_tax_val) ` +
            `FROM tbl_repair_product trp ` +
            `INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `${repairStoreWhere}` +
                `and trp.tax_val = 0) as repairs_profit_without_iva, ` + // total de lucro reparações não faturadas
        `(SELECT SUM((trp.price * trp.quantity) - (trp.cost_price * trp.quantity) - trp.total_tax_val) ` +
            `FROM tbl_returns_product trp ` +
            `INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `and tr.is_deleted = '0' ` +
                `${returnsStoreWhere}` +
                `and trp.tax_val = 0) as returns_profit_without_iva, ` + // total de lucro devoluções não faturadas
        `(SELECT SUM(tsp.cost_price * tsp.quantity) ` +
            `FROM tbl_sales_product tsp ` +
            `INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
            `where tsp.created_date >= '${startTime}' ` +
                `and tsp.created_date <= '${endTime}' ` +
                `${salesStoreWhere}` +
                `and ts.is_deleted = '0') as sales_cost, ` + // custo das vendas
        `(SELECT SUM(trp.cost_price * trp.quantity) ` +
            `FROM tbl_repair_product trp ` +
            `INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `${repairStoreWhere}` +
                `and trp.created_date <= '${endTime}') as repairs_cost, ` + // custo das vendas
        `(SELECT SUM(trp.cost_price * trp.quantity) ` +
            `FROM tbl_returns_product trp ` +
            `INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `${returnsStoreWhere}` +
                `and tr.is_deleted = '0') as returns_cost, ` + // custo das devoluções
        `(SELECT SUM(tsp.total_tax_val) ` +
            `FROM tbl_sales_product tsp ` +
            `INNER JOIN tbl_sales ts on tsp.sale_id = ts.id ` +
            `where tsp.created_date >= '${startTime}' ` +
                `and tsp.created_date <= '${endTime}' ` +
                `${salesStoreWhere}` +
                `and ts.is_deleted = '0') as sales_iva, ` + // IVA das vendas
        `(SELECT SUM(trp.total_tax_val) ` +
            `FROM tbl_repair_product trp ` +
            `INNER JOIN tbl_repair tr on trp.repair_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `${repairStoreWhere}` +
                `and trp.created_date <= '${endTime}') as repairs_iva, ` + // IVA das reparações
        `(SELECT SUM(trp.total_tax_val) ` +
            `FROM tbl_returns_product trp ` +
            `INNER JOIN tbl_returns tr on trp.return_id = tr.id ` +
            `where trp.created_date >= '${startTime}' ` +
                `and trp.created_date <= '${endTime}' ` +
                `${returnsStoreWhere}` +
                `and tr.is_deleted = '0') as returns_iva `; // IVA das devoluções
}

const getSqlForNumberOfNewProducts = (startTime, endTime, preStartTime, preEndTime, store) => {
    const storeWhere = store !== '0' ? `AND tpts.store_id = '${store}' ` : ``;
    const current =
        `SELECT COUNT(tp.id) AS count ` +
        `FROM tbl_products tp ` +
        `INNER JOIN tbl_product_to_shop tpts ON tp.id = tpts.product_id ` +
            `WHERE tp.created_date >= '${startTime}' ` +
            `AND tp.created_date <= '${endTime}' ` +
            `${storeWhere};`; // quantidade de novos produtos
    const prev =
        `SELECT COUNT(tp.id) AS count ` +
        `FROM tbl_products tp ` +
        `INNER JOIN tbl_product_to_shop tpts ON tp.id = tpts.product_id ` +
            `WHERE tp.created_date >= '${preStartTime}' ` +
            `AND tp.created_date <= '${preEndTime}' ` +
            `${storeWhere};`; // data anterior - quantidade de novos produtos
    return current + prev;
}

const getSqlForBestSellingProductsData = (startTime, endTime, preStartTime, preEndTime, store) => {
    const saleStoreWhere = store !== '0' ? `AND sale.store_id = '${store}' ` : ``;
    const repairStoreWhere = store !== '0' ? `AND repair.store_id = '${store}' ` : ``;

    //Query original de quantidade (com atualização de nomes das variáveis para ser mais legivel)
    const qtyQuery =
        `SELECT curQty.pId AS cur_pId, prevQty.pQty AS prev_pQty, curQty.pQty AS cur_pQty, curQty.pName AS cur_pName ` +

        `FROM (` +
            `SELECT sale_product.product_id AS pId, SUM(sale_product.quantity) AS pQty, sale_product.product AS pName ` +
            `FROM tbl_sales_product sale_product ` +
            `INNER JOIN tbl_sales sale ON sale_product.sale_id = sale.id ` +
                `WHERE sale_product.price > '0' ` +
                `AND sale_product.created_date >= '${startTime}' ` +
                `AND sale_product.created_date <= '${endTime}' ` +
                `AND sale.status != "delete" ` +
                `${saleStoreWhere} ` +

            `GROUP BY pId ` +
            `ORDER BY pQty DESC ` +
            `LIMIT 5` +
        `) curQty ` +

        `LEFT JOIN (` +
            `SELECT sale_product.product_id AS pId, SUM(sale_product.quantity) AS pQty ` +
            `FROM tbl_sales_product sale_product ` +
            `INNER JOIN tbl_sales sale ON sale_product.sale_id = sale.id ` +
                `WHERE sale_product.created_date >= '${preStartTime}' ` +
                `AND sale_product.price > '0' ` +
                `AND sale_product.created_date <= '${preEndTime}' ` +
                `AND sale.status != "delete" ` +
                `${saleStoreWhere} ` +
            `GROUP BY pId ` +
        `) prevQty ON curQty.pId = prevQty.pId; `;  // top 5 produtos mais vendidos

        
    const revenueQuery =
        `SELECT curRevenue.pId AS cur_pId, prevRevenue.pRevenue AS prev_pRevenue, curRevenue.pRevenue AS cur_pRevenue, curRevenue.pName AS cur_pName ` +
        `FROM (` +
            `SELECT sale_product.product_id AS pId, SUM(sale_product.subtotal) AS pRevenue, sale_product.product AS pName ` +
            `FROM tbl_sales_product sale_product ` +
            `INNER JOIN tbl_sales sale ON sale_product.sale_id = sale.id ` +

                `WHERE sale_product.created_date >= '${startTime}' ` +
                `AND sale_product.created_date <= '${endTime}' ` +
                `AND sale.status != "delete" ` +
                `${saleStoreWhere} ` +

            `GROUP BY pId ` +
            `ORDER BY pRevenue DESC ` +
            `LIMIT 5` +
        `) curRevenue ` +
        `LEFT JOIN (` +
            `SELECT sale_product.product_id AS pId, SUM(sale_product.subtotal) AS pRevenue ` +
            `FROM tbl_sales_product sale_product ` +
            `INNER JOIN tbl_sales sale ON sale_product.sale_id = sale.id ` +

                `WHERE sale_product.created_date >= '${preStartTime}' ` +
                `AND sale_product.created_date <= '${preEndTime}' ` +
                `AND sale.status != "delete" ` +
                `${saleStoreWhere} ` +

            `GROUP BY pId ` +
            `) prevRevenue ON curRevenue.pId = prevRevenue.pId; `; // top 5 produtos com maior volume de vendas

    const profitQuery =
        `SELECT curProfit.pId AS cur_pId, prevProfit.pProfit AS prev_pProfit, curProfit.pProfit AS cur_pProfit, curProfit.pName AS cur_pName ` +
        `FROM (` +
            `SELECT sale_product.product_id AS pId, SUM(sale_product.subtotal - (sale_product.cost_price * sale_product.quantity)) AS pProfit, sale_product.product AS pName ` +
            `FROM tbl_sales_product sale_product ` +
            `INNER JOIN tbl_sales sale ON sale_product.sale_id = sale.id ` +

                `WHERE sale_product.created_date >= '${startTime}' ` +
                `AND sale_product.created_date <= '${endTime}' ` +
                `AND sale.status != "delete" ` +
                `${saleStoreWhere} ` +

            `GROUP BY pId ` +
            `ORDER BY pProfit DESC ` +
            `LIMIT 5` +
        `) curProfit ` +
        `LEFT JOIN (` +
        `SELECT sale_product.product_id AS pId, SUM(sale_product.subtotal - (sale_product.cost_price * sale_product.quantity)) AS pProfit ` +
            `FROM tbl_sales_product sale_product ` +
            `INNER JOIN tbl_sales sale ON sale_product.sale_id = sale.id ` +

                `WHERE sale_product.created_date >= '${preStartTime}' ` +
                `AND sale_product.created_date <= '${preEndTime}' ` +
                `AND sale.status != "delete" ` +
                `${saleStoreWhere} ` +

            `GROUP BY pId ` +
            `) prevProfit ON curProfit.pId = prevProfit.pId; `; // top 5 produtos mais lucrativos

    return /* new_query */ qtyQuery + revenueQuery + profitQuery;
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
            `) prev ON current.name = prev.name`; // top 5 produtos fornecedores com maior qtd
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
            `) prev ON current.name = prev.name`; // top 5 produtos fornecedores com maior valor

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
        `ORDER BY tp.created_date ASC;` // gráfico de barras qtd/valor de compras

    return query;
}

const getSqlForNumberOfNewClients = (startTime, endTime, preStartTime, preEndTime, store) => {
   /*  const storeWhere = store !== '0' ? `AND tco.store_id = '${store}' ` : ``; */
    const current =
        `SELECT COUNT(tc.id) AS count ` +
        `FROM tbl_client tc ` +
        	`WHERE tc.created_date >= '${startTime}' ` +
            `AND tc.created_date <= '${endTime}'; `;
    const prev =
        `SELECT COUNT(tc.id) AS count ` +
        `FROM tbl_client tc ` +
        	`WHERE tc.created_date >= '${preStartTime}' ` +
            `AND tc.created_date <= '${preEndTime}'; `;
            return current + prev; // errado, apenas verificar tbl_clients e data adicionado
}

const getSqlForMostSpentClientsData = (startTime, endTime, preStartTime, preEndTime, store) => {
    const storeWhere = store !== '0' ? `AND t.store_id = '${store}' ` : ``;
    const query =
        `SELECT t1.client_id, t1.spent, t2.spent AS _spent, tc.name ` +
        `FROM (` +
            `SELECT t.client_id, SUM(t.spent) AS spent ` +
            /* `WHERE is_deleted = '0' OR is_deleted = '5' `+ */
            `FROM (` +
                `SELECT client_id, is_deleted, total_sales_euro AS spent, created_date, store_id ` +
                
                `FROM tbl_sales ` +
                `WHERE is_deleted = '0'`+
            `UNION ` +
                `SELECT client_id, status, total_euro AS spent, created_date, store_id ` +
                
                `FROM tbl_repair ` +
                `WHERE status = '5' `+
            `UNION ` +
                `SELECT client_id, is_deleted, total_euro AS spent, created_date, store_id ` +
                
                `FROM tbl_returns ` +
                `WHERE is_deleted = '0'`+
            `) t ` +
            /* `WHERE t.is_deleted = '0' OR t.is_deleted = '5' `+ */
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
                `WHERE is_deleted = '0'`+
            `UNION ` +
                `SELECT client_id, total_euro AS spent, created_date, store_id ` +
                `FROM tbl_repair ` +
                `WHERE status = '5' `+
            `UNION ` +
                `SELECT client_id, total_euro AS spent, created_date, store_id ` +
                `FROM tbl_returns ` +
                `WHERE is_deleted = '0'`+
            `) t ` +
            `WHERE t.created_date >= '${preStartTime}' ` +
                `AND t.created_date <= '${preEndTime}' ` +
                `${storeWhere}` +
            `GROUP BY t.client_id ` +
        `) t2 ON t1.client_id = t2.client_id ` +
        `LEFT JOIN tbl_client tc ON t1.client_id = tc.id `
        return query; // clientes com mais valor gasto nas vendas, reps e notas de credito. falta colocar is_deleted!!!
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

        return query // percentagem de clientes novos VS clientes recorrentes - está errado
}
const getSqlForSellPhoneData = (startTime, endTime) => {
    const query = `SELECT ` +
        `(SELECT COUNT(id) ` +
            `FROM tbl_sellmyphone_sold ` +
            `WHERE created_date >= '${startTime}' ` +
                `AND created_date <= '${endTime}' ` +
                `AND status = '9') AS cancelledOrders, ` +
        `(SELECT COUNT(id) ` +
            `FROM tbl_sellmyphone_sold ` +
            `WHERE created_date >= '${startTime}' ` +
                `AND created_date <= '${endTime}') AS receivedOrders, ` +
        `(SELECT COUNT(id) ` +
            `FROM tbl_sellmyphone_sold ` +
            `WHERE created_date >= '${startTime}' ` +
                `AND created_date <= '${endTime}' ` +
                `AND status = 7) AS finishedOrders, ` + // quantidade de smp finalizados
        `(SELECT SUM(admin_price) ` +
            `FROM tbl_sellmyphone_sold ` +
            `WHERE created_date >= '${startTime}' ` +
            `AND status = 7 ` +
            `AND created_date <= '${endTime}') AS totalPaidAmount, ` + // total de valor pago
        `(SELECT SUM(admin_price) / COUNT(id) ` +
            `FROM tbl_sellmyphone_sold ` +
            `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}') AS averageAmount, ` + // média de valor pago
        `(SELECT SUM(UNIX_TIMESTAMP(modified_date) - UNIX_TIMESTAMP(created_date)) / count(id) ` +
            `FROM tbl_sellmyphone_sold ` +
            `WHERE created_date >= '${startTime}' ` +
            `AND status = 7 ` +
            `AND created_date <= '${endTime}') AS averageTime`; // média de tempo desde inicio até finalizar
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
            `${storeWhere}) AS receivedOrders, ` + // SOS recebidos
        `(SELECT COUNT(id) ` +
        `FROM tbl_sos ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `AND status = '5' ` +
            `${storeWhere}) AS shippedOrders, ` + // SOS enviados
        `(SELECT SUM(UNIX_TIMESTAMP(modified_date) - UNIX_TIMESTAMP(created_date)) / COUNT(id) ` +
        `FROM tbl_sos ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `AND status = '5' ` +
            `${storeWhere}) AS averageTime, ` + // média de tempo desde o pedido até finalizar
        `(SELECT SUM(total_euro) ` +
        `FROM tbl_repair tr ` +
        `INNER JOIN tbl_sos ts ON tr.sos_id = ts.id ` +
        `WHERE ts.created_date >= '${startTime}' ` +
            `AND ts.created_date <= '${endTime}' ` +
            `${_storeWhere}) AS totalRevenue`; // total valor de reparações vindo de SOS
    return query;
}

const getSqlForRepairData = (startTime, endTime, store) => {
    const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;
    const query = `SELECT ` +
        `(SELECT COUNT(id) ` +
        `FROM tbl_repair ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `${storeWhere}) AS totalRepairs, ` + // numero de reparações
        `(SELECT COUNT(id) ` +
        `FROM tbl_repair ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `AND status = 5 ` +
            `${storeWhere}) AS completedRepairs, ` + // qtd reparações concluidas (entregue ao cliente)
        `(SELECT COUNT(id) ` +
        `FROM tbl_repair ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `AND status = 6 ` +
            `${storeWhere}) AS cancelledRepairs, ` + // qtd reparações sem reparação
        `(SELECT SUM(UNIX_TIMESTAMP(modified_date) - UNIX_TIMESTAMP(created_date)) / COUNT(id) ` +
        `FROM tbl_repair ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `AND status = 7 ` +
            `${storeWhere}) AS averageTime, ` + // tempo médio de reparação desde processamento até disponivel para levantamento
        `(SELECT SUM(total_euro) / COUNT(id) ` +
        `FROM tbl_repair ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `AND status >= 4 OR status <= 7 ` + // estados: 4 reparado, 7 disponivel, 5 entregue, 6 sem reparação (apenas reparações concluidas)
            `${storeWhere}) AS averageValue`; // valor médio de reparação
        `(SELECT SUM(total_euro) ` +
        `FROM tbl_repair ` +
        `WHERE created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `${storeWhere}) AS totalValue`;
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
            `${storeWhere}) AS repair, ` + // qtd reparações normais
        `(SELECT COUNT(id) ` +
        `FROM tbl_repair ` +
        `WHERE type = 2 ` +
            `AND created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `${storeWhere}) AS warranty, ` + // qtd reparações garantia
        `(SELECT COUNT(id) ` +
        `FROM tbl_repair ` +
        `WHERE type = 3 ` +
            `AND created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `${storeWhere}) AS sos`; // qtd reparações SOS
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
            `) prev ON current.uid = prev.uid`; // quantidade de interações

    return query;
}

const getSqlRepairForMostInteractionData = (startTime, endTime, preStartTime, preEndTime, store) => {

    const storeWhere = store !== '0' ? `AND store_id = '${store}' ` : ``;

    const query =
        `SELECT current.count AS current, prev.count AS prev, current.uid, current.status_text ` +
        `FROM (` +
            `SELECT COUNT(user_id) AS count, user_id AS uid, status_text ` +
            `FROM tbl_status_history ` +
            `WHERE page = 'repairs' ` +
            `AND type = 'updateStatus' ` +
            `AND created_date >= '${startTime}' ` +
            `AND created_date <= '${endTime}' ` +
            `${storeWhere}` +
            `GROUP BY user_id ` +
            `ORDER BY count DESC ` +
            `LIMIT 5` +
        `) current ` +
        `LEFT JOIN (` +
            `SELECT COUNT(user_id) AS count, user_id AS uid, status_text ` +
            `FROM tbl_status_history ` +
            `WHERE page = 'repairs' ` +
            `AND type = 'updateStatus' ` +
            `AND created_date >= '${preStartTime}' ` +
            `AND created_date <= '${preEndTime}' ` +
            `${storeWhere}` +
            `GROUP BY user_id ` +
        `) prev ON current.uid = prev.uid`; // quantidade de interações

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
    getSqlForMostInteractionData,
    getSqlRepairForMostInteractionData
}

