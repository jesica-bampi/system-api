const Models = () => {
  const ConnectDB = require("../../database/connect").ConnectDB;
  const connection = new ConnectDB();
  return connection.initConnection();
};

module.exports = {
  async get_All() {
    const { customer } = Models();

    return await customer
      .findAll({
        raw: true,
      })
      .then((result) => {
        return result;
      });
  },

  async get_One(id) {
    const { customer } = Models();

    return await customer.findByPk(id).then((result) => {
      return result;
    });
  },

  async add(body) {
    const { customer } = Models();

    return await customer
      .create({ ...body })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  async update(body) {
    const { customer } = Models();

    return await customer
      .update(
        { ...body },
        {
          where: {
            id: body.id,
          },
        }
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  async del(id) {
    const { customer } = Models();

    return await customer
      .destroy({
        where: {
          id: id,
        },
      })
      .then(() => {
        return true;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
