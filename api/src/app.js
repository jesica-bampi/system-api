const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')

//Rotas
const index = require("./routes/index");
const categories = require("./routes/categories");
const users = require("./routes/users");
const customer = require("./routes/customer");
const order_items = require("./routes/order_items");
const orders = require("./routes/orders");
const pay_titles = require("./routes/pay_titles");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", index);
app.use("/categories", categories);
app.use("/users", users);
app.use("/customer", customer);
app.use("/order/items", order_items);
app.use("/orders", orders);
app.use("/pay_titles", pay_titles);

module.exports = app;
