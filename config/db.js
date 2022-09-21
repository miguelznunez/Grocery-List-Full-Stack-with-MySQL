const mysql = require('mysql');

const connectDB  = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "c7h1a1s9E86",
  database: "grocery_list"
});

module.exports = connectDB;