const { post } = require("../controllers/user");

const Models = () => {
  const ConnectDB = require("../../database/connect").ConnectDB;
  const connection = new ConnectDB();
  return connection.initConnection();
};

module.exports = {
  async get_All() {
    const { categories } = Models();

    return await categories
      .findAll({
        raw: true,
      })
      .then((result) => {
        return result;
      });
  },

  async get_One(id) {
    const { categories } = Models();

    return await categories.findByPk(id).then((result) => {
      return result;
    });
  },

  async add(body) {
    const { categories } = Models();

    return await categories
      .create({ body })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  },

  async update(body) {
    const { categories } = Models();

    return await categories
      .update({ body })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
  },
};
