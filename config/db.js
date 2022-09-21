const mysql = require('mysql');

const connectDB  = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "<ENTER YOUR PASSWORD>",
  database: "<ENTER THE NAME OF YOUR DATABASE>"
});

module.exports = connectDB;