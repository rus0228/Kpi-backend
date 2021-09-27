const getSqlForRevenueProfitQty = (startTime, endTime, productTypes, duration, store) => {
	if (store === '0'){
		if (productTypes.includes('sale') && productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;
			}
		}
		if (productTypes.includes('sale') && productTypes.includes('repair') && !productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;
			}
		}
		if (productTypes.includes('sale') && !productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;
			}
		}
		if (!productTypes.includes('sale') && productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;
			}
			if (duration < 1) {
				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;
			}
		}
		if (productTypes.includes('sale') && !productTypes.includes('repair') && !productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;
			}
		}
		if (!productTypes.includes('sale') && productTypes.includes('repair') && !productTypes.includes('return')) {
			if (duration > 365) {

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;

			}
			if (duration > 31 && duration <= 365) {

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;
			}
			if (duration > 1 && duration < 31) {

				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;
			}
			if (duration < 1) {
				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;
			}
		}
		if (!productTypes.includes('sale') && !productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;
			}
			if (duration < 1) {
				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;
			}
		}
	}else {
		if (productTypes.includes('sale') && productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql + returns_sql;
			}
		}
		if (productTypes.includes('sale') && productTypes.includes('repair') && !productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + repairs_sql;
			}
		}
		if (productTypes.includes('sale') && !productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return sales_sql + returns_sql;
			}
		}
		if (!productTypes.includes('sale') && productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;
			}
			if (duration < 1) {
				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql + returns_sql;
			}
		}
		if (productTypes.includes('sale') && !productTypes.includes('repair') && !productTypes.includes('return')) {
			if (duration > 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by year(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;

			}
			if (duration > 31 && duration <= 365) {
				const sales_sql = `select 'sales' as product, concat(year(tsp.created_date), '-', month(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by month(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;
			}
			if (duration > 1 && duration < 31) {
				const sales_sql = `select 'sales' as product, concat(month(tsp.created_date), '-', day(tsp.created_date)) as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by day(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;
			}
			if (duration < 1) {
				const sales_sql = `select 'sales' as product, concat(hour(tsp.created_date), ':00') as time, sum(tsp.subtotal) as revenue, sum(tsp.subtotal - tsp.cost_price * tsp.quantity) as profit,  sum(tsp.quantity) as quantity` +
					` from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id` +
					` where tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}' and ts.store_id = '${store}'` +
					` group by hour(tsp.created_date) order by tsp.created_date asc;`;

				return sales_sql;
			}
		}
		if (!productTypes.includes('sale') && productTypes.includes('repair') && !productTypes.includes('return')) {
			if (duration > 365) {

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;

			}
			if (duration > 31 && duration <= 365) {

				const repairs_sql = `select 'repairs' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;
			}
			if (duration > 1 && duration < 31) {

				const repairs_sql = `select 'repairs' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;
			}
			if (duration < 1) {
				const repairs_sql = `select 'repairs' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return repairs_sql;
			}
		}
		if (!productTypes.includes('sale') && !productTypes.includes('repair') && productTypes.includes('return')) {
			if (duration > 365) {
				const returns_sql = `select 'returns' as product, concat(year(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by year(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;

			}
			if (duration > 31 && duration <= 365) {
				const returns_sql = `select 'returns' as product, concat(year(trp.created_date), '-', month(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by month(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;
			}
			if (duration > 1 && duration < 31) {
				const returns_sql = `select 'returns' as product, concat(month(trp.created_date), '-', day(trp.created_date)) as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by day(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;
			}
			if (duration < 1) {
				const returns_sql = `select 'returns' as product, concat(hour(trp.created_date), ':00') as time, sum(trp.subtotal) as revenue, sum(trp.subtotal - trp.cost_price * trp.quantity) as profit,  sum(trp.quantity) as quantity` +
					` from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id` +
					` where trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}' and tr.store_id = '${store}'` +
					` group by hour(trp.created_date) order by trp.created_date asc;`;

				return returns_sql;
			}
		}
	}
}
const getSqlForPurchasedOrdersData = (startTime, endTime, store, duration) => {
	if (store === '0'){
		if (duration > 365) {
			return `select concat(year(created_date)) as time, sum(subtotal) as revenue, sum(quantity) as quantity from tbl_client_order_product ` +
				`where created_date >= '${startTime}' and created_date <= '${endTime}' ` +
				`group by year(created_date) order by created_date asc;`;
		}
		if (duration > 31 && duration <= 365) {
			return `select concat(year(created_date), '-', month(created_date)) as time, sum(subtotal) as revenue, sum(quantity) as quantity from tbl_client_order_product ` +
				`where created_date >= '${startTime}' and created_date <= '${endTime}' ` +
				`group by month(created_date) order by created_date asc;`;
		}
		if (duration > 1 && duration < 31) {
			return `select concat(month(created_date), '-', day(created_date)) as time, sum(subtotal) as revenue, sum(quantity) as quantity from tbl_client_order_product ` +
				`where created_date >= '${startTime}' and created_date <= '${endTime}' ` +
				`group by day(created_date) order by created_date asc;`;
		}
		if (duration < 1) {
			return `select concat(hour(created_date), ':00') as time, sum(subtotal) as revenue, sum(quantity) as quantity from tbl_client_order_product ` +
				`where created_date >= '${startTime}' and created_date <= '${endTime}' ` +
				`group by hour(created_date) order by created_date asc;`;
		}
	}else {
		if (duration > 365) {
			return `select concat(year(tcop.created_date)) as time, sum(tcop.subtotal) as revenue, sum(tcop.quantity) as quantity ` +
				`from tbl_client_order_product tcop inner join tbl_client_orders tco on tcop.client_id = tco.client_id ` +
				`where tcop.created_date >= '${startTime}' and tcop.created_date <= '${endTime}' and tco.store_id = ${store} ` +
				`group by year(tcop.created_date) order by tcop.created_date asc;`;
		}
		if (duration > 31 && duration <= 365) {
			return `select concat(year(tcop.created_date), '-', month(tcop.created_date)) as time, sum(tcop.subtotal) as revenue, sum(tcop.quantity) as quantity ` +
				`from tbl_client_order_product tcop inner join tbl_client_orders tco on tcop.client_id = tco.client_id ` +
				`where tcop.created_date >= '${startTime}' and tcop.created_date <= '${endTime}' and tco.store_id = ${store} ` +
				`group by month(tcop.created_date) order by tcop.created_date asc;`;
		}
		if (duration > 1 && duration < 31) {
			return `select concat(month(tcop.created_date), '-', day(tcop.created_date)) as time, sum(tcop.subtotal) as revenue, sum(tcop.quantity) as quantity ` +
				`from tbl_client_order_product tcop inner join tbl_client_orders tco on tcop.client_id = tco.client_id ` +
				`where tcop.created_date >= '${startTime}' and tcop.created_date <= '${endTime}' and tco.store_id = ${store} ` +
				`group by day(tcop.created_date) order by tcop.created_date asc;`;
		}
		if (duration < 1) {
			return `select concat(hour(tcop.created_date), ':00') as time, sum(tcop.subtotal) as revenue, sum(tcop.quantity) as quantity ` +
				`from tbl_client_order_product tcop inner join tbl_client_orders tco on tcop.client_id = tco.client_id ` +
				`where tcop.created_date >= '${startTime}' and tcop.created_date <= '${endTime}' and tco.store_id = ${store} ` +
				`group by hour(tcop.created_date) order by tcop.created_date asc;`;
		}
	}
}
const getSqlForTotalValue = (startTime, endTime, store) => {
	if (store === '0') {
		return `select` +
			` (select sum(case when total_tax > 0 then total_sales_euro end) from tbl_sales where created_date >= '${startTime}' and created_date <= '${endTime}') as sales_iva,` +
			` (select sum(case when total_tax = 0 then total_sales_euro end) from tbl_sales where created_date >= '${startTime}' and created_date <= '${endTime}') as sales,` +
			` (select sum(case when total_tax > 0 then total_euro end) from tbl_returns where created_date >= '${startTime}' and created_date <= '${endTime}') as returns_iva,` +
			` (select sum(case when total_tax = 0 then total_euro end) from tbl_returns where created_date >= '${startTime}' and created_date <= '${endTime}') as returns,` +
			` (select sum(case when total_tax > 0 then total_euro end) from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}') as repairs_iva,` +
			` (select sum(case when total_tax = 0 then total_euro end) from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}') as repairs,` +
			` (select sum(case when tax_val > 0 then subtotal - cost_price * quantity end) from tbl_sales_product where created_date >= '${startTime}' and created_date <= '${endTime}') as sales_profit_iva,` +
			` (select sum(case when tax_val = 0 then subtotal_without_tax - cost_price * quantity end) from tbl_sales_product where created_date >= '${startTime}' and created_date <= '${endTime}') as sales_profit,` +
			` (select sum(case when tax_val > 0 then subtotal - cost_price * quantity end) from tbl_returns_product where created_date >= '${startTime}' and created_date <= '${endTime}') as returns_profit_iva,` +
			` (select sum(case when tax_val = 0 then subtotal_without_tax - cost_price * quantity end) from tbl_returns_product where created_date >= '${startTime}' and created_date <= '${endTime}') as returns_profit,` +
			` (select sum(case when tax_val > 0 then subtotal - cost_price * quantity end) from tbl_repair_product where created_date >= '${startTime}' and created_date <= '${endTime}') as repairs_profit_iva,` +
			` (select sum(case when tax_val = 0 then subtotal_without_tax - cost_price * quantity end) from tbl_repair_product where created_date >= '${startTime}' and created_date <= '${endTime}') as repairs_profit;`

	}
	return `select` +
		` (select sum(case when total_tax > 0 then total_sales_euro end) from tbl_sales where store_id = '${store}' and created_date >= '${startTime}' and created_date <= '${endTime}') as sales_iva,` +
		` (select sum(case when total_tax = 0 then total_sales_euro end) from tbl_sales where store_id = '${store}' and created_date >= '${startTime}' and created_date <= '${endTime}') as sales,` +
		` (select sum(case when total_tax > 0 then total_euro end) from tbl_returns where store_id = '${store}' and created_date >= '${startTime}' and created_date <= '${endTime}') as returns_iva,` +
		` (select sum(case when total_tax = 0 then total_euro end) from tbl_returns where store_id = '${store}' and created_date >= '${startTime}' and created_date <= '${endTime}') as returns,` +
		` (select sum(case when total_tax > 0 then total_euro end) from tbl_repair where store_id = '${store}' and created_date >= '${startTime}' and created_date <= '${endTime}') as repairs_iva,` +
		` (select sum(case when total_tax = 0 then total_euro end) from tbl_repair where store_id = '${store}' and created_date >= '${startTime}' and created_date <= '${endTime}') as repairs,` +
		` (select sum(case when tax_val > 0 then subtotal - cost_price * quantity end) from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id where ts.store_id = '${store}' and tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}') as sales_profit_iva,` +
		` (select sum(case when tax_val = 0 then subtotal_without_tax - cost_price * quantity end) from tbl_sales_product tsp inner join tbl_sales ts on tsp.sale_id = ts.id where ts.store_id = '${store}' and tsp.created_date >= '${startTime}' and tsp.created_date <= '${endTime}') as sales_profit,` +
		` (select sum(case when tax_val > 0 then subtotal - cost_price * quantity end) from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id where tr.store_id = '${store}' and trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}') as returns_profit_iva,` +
		` (select sum(case when tax_val = 0 then subtotal_without_tax - cost_price * quantity end) from tbl_returns_product trp inner join tbl_returns tr on trp.return_id = tr.id where tr.store_id = '${store}' and trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}') as returns_profit,` +
		` (select sum(case when tax_val > 0 then subtotal - cost_price * quantity end) from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id where tr.store_id = '${store}' and trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}') as repairs_profit_iva,` +
		` (select sum(case when tax_val = 0 then subtotal_without_tax - cost_price * quantity end) from tbl_repair_product trp inner join tbl_repair tr on trp.repair_id = tr.id where tr.store_id = '${store}' and trp.created_date >= '${startTime}' and trp.created_date <= '${endTime}') as repairs_profit;`

}

const getSqlForTotalCostIva = (startTime, endTime, store) => {
	if (store === '0'){
		return `select` +
			` (select sum(total) from tbl_purchase where created_date >= '${startTime}' and created_date <= '${endTime}') as totalCost,` +
			` (select sum(total_tax) from tbl_sales where created_date >= '${startTime}' and created_date <= '${endTime}') as totalSalesTax,` +
			` (select sum(total_tax) from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}') as totalRepairTax,` +
			` (select sum(total_tax) from tbl_returns where created_date >= '${startTime}' and created_date <= '${endTime}') as totalReturnsTax`;
	}else {
		return `select` +
			` (select sum(tbl_purchase.total) from tbl_purchase inner join purchase_group on tbl_purchase.purchase_group_id = purchase_group.id ` +
				`where tbl_purchase.created_date >= '${startTime}' and tbl_purchase.created_date <= '${endTime}' and purchase_group.store_id = '${store}') as totalCost,` +
			` (select sum(total_tax) from tbl_sales where created_date >= '${startTime}' and created_date <= '${endTime}' and store_id = '${store}') as totalSalesTax,` +
			` (select sum(total_tax) from tbl_repair where created_date >= '${startTime}' and created_date <= '${endTime}' and store_id = '${store}') as totalRepairTax,` +
			` (select sum(total_tax) from tbl_returns where created_date >= '${startTime}' and created_date <= '${endTime}' and store_id = '${store}') as totalReturnsTax`;
	}
}

const getSqlForTotalAndLostRmaData = (startTime, endTime, store) => {
	if (store === '0'){
		return `select sum(total) as total, sum(total - refund_value) as lost` +
			` from tbl_rma_group where changed_date <= '${endTime}' and created_date >= '${startTime}'`;
	}else {
		return `select sum(total) as total, sum(total - refund_value) as lost` +
			` from tbl_rma_group where changed_date <= '${endTime}' and created_date >= '${startTime}' and store_id = '${store}'`
		;
	}
}
module.exports = {
	getSqlForRevenueProfitQty,
	getSqlForPurchasedOrdersData,
	getSqlForTotalCostIva,
	getSqlForTotalValue,
	getSqlForTotalAndLostRmaData
};
