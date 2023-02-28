const mysql = require('mysql2/promise');
require('dotenv').config();

const { HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE } = process.env;

const connection = mysql.createPool({
  host: HOST,
  user: SQL_USER,
  password: SQL_PASSWORD,
  database: SQL_DATABASE });

module.exports = connection;