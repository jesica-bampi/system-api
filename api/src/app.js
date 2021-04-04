const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')

//Rotas
const index = require("./routes/index");
const categories = require("./routes/categories");
const users = require("./routes/users");
const customer = require("./routes/customer");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", index);
app.use("/categories", categories);
app.use("/users", users);
app.use("/customer", customer);

module.exports = app;
