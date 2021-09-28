const express = require('express');
const {
	getRevenueProfitQty,
	getPurchasedOrdersData,
	getTotalCostIva,
	getTotalValue,

	getNumberOfNewProducts,
	getBestSellingProductsData,

	getNumberOfNewClients,
	getMostSpentClientsData,
	getRepeatedCustomerRate,

	getTotalAndLostRmaData,
	getTotalLossesData,

	getNumberOfRepairs,
	getRepairType,
	getMostInteractionData,

	getCustomerEvaluation,

	getSosData,
	getSosCustomData,

	getSellPhoneData,
	getCustomSellPhoneData,

	getMostFrequentSuppliers,
	getMostPurchasedSuppliers,
	getPurchaseData,
} = require('./src/main');
const SocketIO = require('socket.io');
const http = require('http');
const cors = require('cors');

let app = express();
app.use(cors());


app.get('/api/getRevenueProfitQty', getRevenueProfitQty);
app.get('/api/getPurchasedOrdersData', getPurchasedOrdersData);
app.get('/api/getTotalCostIva', getTotalCostIva);
app.get('/api/getTotalValue', getTotalValue);

app.get('/api/getNumberOfNewProducts', getNumberOfNewProducts);
app.get('/api/getBestSellingProductsData', getBestSellingProductsData);

app.get('/api/getNumberOfNewClients', getNumberOfNewClients);
app.get('/api/getMostSpentClientsData', getMostSpentClientsData);
app.get('/api/getRepeatedCustomerRate', getRepeatedCustomerRate);

app.get('/api/getTotalAndLostRmaData', getTotalAndLostRmaData);
app.get('/api/getTotalLossesData', getTotalLossesData);

app.get('/api/getNumberOfRepairs', getNumberOfRepairs);
app.get('/api/getRepairType', getRepairType);
app.get('/api/getMostInteractionData', getMostInteractionData);

app.get('/api/getCustomerEvaluation', getCustomerEvaluation);

app.get('/api/getSosData', getSosData);
app.get('/api/getSosCustomData', getSosCustomData);

app.get('/api/getSellPhoneData', getSellPhoneData);
app.get('/api/getCustomSellPhoneData', getCustomSellPhoneData);

app.get('/api/getMostFrequentSuppliers', getMostFrequentSuppliers);
app.get('/api/getMostPurchasedSuppliers', getMostPurchasedSuppliers);
app.get('/api/getPurchaseData', getPurchaseData);

const httpServer = http.createServer(app);
httpServer.listen(3000, function () {
	console.log('kpi backend is working on port 3000.');
});
