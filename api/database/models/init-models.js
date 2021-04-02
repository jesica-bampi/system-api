var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _customer = require("./customer");
var _order_items = require("./order_items");
var _orders = require("./orders");
var _pay_titles = require("./pay_titles");
var _payment_types = require("./payment_types");
var _products = require("./products");
var _receive_titles = require("./receive_titles");
var _sales = require("./sales");
var _sales_items = require("./sales_items");
var _stocks = require("./stocks");
var _suppliers = require("./suppliers");
var _users = require("./users");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var order_items = _order_items(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var pay_titles = _pay_titles(sequelize, DataTypes);
  var payment_types = _payment_types(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var receive_titles = _receive_titles(sequelize, DataTypes);
  var sales = _sales(sequelize, DataTypes);
  var sales_items = _sales_items(sequelize, DataTypes);
  var stocks = _stocks(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  sales.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(sales, { as: "sales", foreignKey: "customer_id"});
  order_items.belongsTo(orders, { as: "num_order_order", foreignKey: "num_order"});
  orders.hasMany(order_items, { as: "order_items", foreignKey: "num_order"});
  pay_titles.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(pay_titles, { as: "pay_titles", foreignKey: "order_id"});
  stocks.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(stocks, { as: "stocks", foreignKey: "order_id"});
  orders.belongsTo(payment_types, { as: "paymente_type", foreignKey: "paymente_type_id"});
  payment_types.hasMany(orders, { as: "orders", foreignKey: "paymente_type_id"});
  sales.belongsTo(payment_types, { as: "payment_type", foreignKey: "payment_type_id"});
  payment_types.hasMany(sales, { as: "sales", foreignKey: "payment_type_id"});
  order_items.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_items, { as: "order_items", foreignKey: "product_id"});
  sales_items.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(sales_items, { as: "sales_items", foreignKey: "product_id"});
  stocks.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(stocks, { as: "stocks", foreignKey: "product_id"});
  receive_titles.belongsTo(sales, { as: "sale", foreignKey: "sale_id"});
  sales.hasMany(receive_titles, { as: "receive_titles", foreignKey: "sale_id"});
  sales_items.belongsTo(sales, { as: "sale", foreignKey: "sale_id"});
  sales.hasMany(sales_items, { as: "sales_items", foreignKey: "sale_id"});
  stocks.belongsTo(sales, { as: "sale", foreignKey: "sale_id"});
  sales.hasMany(stocks, { as: "stocks", foreignKey: "sale_id"});
  orders.belongsTo(suppliers, { as: "supplier", foreignKey: "supplier_id"});
  suppliers.hasMany(orders, { as: "orders", foreignKey: "supplier_id"});
  sales.belongsTo(users, { as: "seller_user", foreignKey: "seller"});
  users.hasMany(sales, { as: "sales", foreignKey: "seller"});

  return {
    categories,
    customer,
    order_items,
    orders,
    pay_titles,
    payment_types,
    products,
    receive_titles,
    sales,
    sales_items,
    stocks,
    suppliers,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
