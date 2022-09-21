// For using installed packages
const express = require("express");
const fetch = require("node-fetch");
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")

// For creating the express server
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// For creating a port to run the server 
const port = process.env.PORT || 3000;

// For setting template engine
app.set("view engine", "ejs");

// For accessing public folder
app.use(express.static("public"));

app.use("/", require("./routes/listRoutes"))

app.use(errorHandler)
// Run server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});