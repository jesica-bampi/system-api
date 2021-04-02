const express = require("express");
const app = express();
const router = express.Router();
//Rotas
const index = require("./routes/index");
const userroute = require("./routes/user");
app.use("/", index);
app.use("/user", userroute);
module.exports = app;


