const express = require('express');
const {
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

	getRepairData,
	getRepairType,
	getMostInteractionData,

	getCustomerEvaluation,

	getSosData,

	getMostFrequentSuppliers,
	getMostPurchasedSuppliers,
	getPurchaseData,
} = require('./src/main');
const SocketIO = require('socket.io');
const http = require('http');
const cors = require('cors');

let app = express();
app.use(cors());


app.get('/api/getSalesRevenueProfitQty', getSalesRevenueProfitQty);
app.get('/api/getRepairsRevenueProfitQty', getRepairsRevenueProfitQty);
app.get('/api/getReturnsRevenueProfitQty', getReturnsRevenueProfitQty);
app.get('/api/getPurchaseOrdersRevenueQty', getPurchaseOrdersRevenueQty);
app.get('/api/getTotalData', getTotalData);


app.get('/api/getNumberOfNewProducts', getNumberOfNewProducts);
app.get('/api/getBestSellingProductsData', getBestSellingProductsData);

app.get('/api/getNumberOfNewClients', getNumberOfNewClients);
app.get('/api/getMostSpentClientsData', getMostSpentClientsData);
app.get('/api/getRepeatedCustomerRate', getRepeatedCustomerRate);

app.get('/api/getInventoryLossesData', getInventoryLossesData);

app.get('/api/getSellPhoneData', getSellPhoneData);

app.get('/api/getSosData', getSosData);

app.get('/api/getRepairData', getRepairData);
app.get('/api/getRepairType', getRepairType);
app.get('/api/getMostInteractionData', getMostInteractionData);

app.get('/api/getCustomerEvaluation', getCustomerEvaluation);

app.get('/api/getMostFrequentSuppliers', getMostFrequentSuppliers);
app.get('/api/getMostPurchasedSuppliers', getMostPurchasedSuppliers);
app.get('/api/getPurchaseData', getPurchaseData);

const httpServer = http.createServer(app);
httpServer.listen(3000, function () {
	console.log('kpi backend is working on port 3000.');
});
