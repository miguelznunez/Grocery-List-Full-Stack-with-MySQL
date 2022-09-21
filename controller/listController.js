const connectDB = require("../config/db")

const getList = async (req, res) => {
  let sql = "SELECT * FROM list"
  let sqlParams = [req.query]
  connectDB.query(sql, sqlParams, function (err, rows, fields) {
    if (err) throw new Error(err)
    res.status(200)
    res.render("index", {"rows" : rows})
  });
}

const addItem = async (req, res) => {
  let sql = "INSERT INTO list (item) VALUES (?)";
  let sqlParams = [req.query.item];
  let rows = await executeSQL(sql, sqlParams);
  res.status(200)
  res.send(rows.affectedRows.toString());
}

const updateItem = async (req, res) => {
  let sql = `UPDATE list SET cart = ${req.query.action} WHERE id = ?`;
  let sqlParams = [req.query.id];
  let rows = await executeSQL(sql, sqlParams);
  res.status(200)
  res.send(rows.affectedRows.toString());
}

const deleteItem = async (req, res) => {
  let sql = "DELETE FROM list WHERE id = ?";
  let sqlParams = [req.query.id];
  let rows = await executeSQL(sql, sqlParams);
  res.status(200)
  res.send(rows.affectedRows.toString());
}

const deleteList = async (req, res) => {
  let sql = "DELETE FROM list";
  let sqlParams = "";
  let rows = await executeSQL(sql, sqlParams);
  res.status(200)
  res.send(rows.affectedRows.toString());
}

// Execute mysql query
async function executeSQL(sql, params){
 return new Promise (function (resolve, reject) {
   connectDB.query(sql, params, function (err, rows, fields) {
     if (err) throw new Error(err)
     resolve(rows)
  });
 });
}

module.exports = {
  getList,
  addItem,
  updateItem,
  deleteItem,
  deleteList,
}