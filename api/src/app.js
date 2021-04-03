const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')

//Rotas
const index = require("./routes/index");
const user = require("./routes/user");
const categories = require("./routes/categories");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", index);
app.use("/user", user);
app.use("/categories", categories);

module.exports = app;
