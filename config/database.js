const mysql = require('mysql2');
const connection = require('./connection');

module.exports = mysql.createPool(connection.mysql);
