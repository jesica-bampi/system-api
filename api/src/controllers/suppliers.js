const Model = require("../models/suppliers");

module.exports = {
  async get_All(req, res, next) {
    try {
      const data = await Model.get_All();
      res.send(JSON.stringify(data));
    } catch (error) {
      next(error);
    }
  },

  async get_One(req, res, next) {
    try {
      const data = await Model.get_One(req.params.id);
      res.send(JSON.stringify(data));
    } catch (error) {
      next(error);
    }
  },

  async add(req, res, next) {
    try {
      const data = await Model.add(req.body);
      res.send(JSON.stringify(data));
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const data = await Model.update(req.body);
      res.send(JSON.stringify(data));
    } catch (error) {
      next(error);
    }
  },

  async del(req, res, next) {
    try {
      const data = await Model.del(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
};