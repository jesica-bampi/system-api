const Models = () => {
  const ConnectDB = require("../../database/connect").ConnectDB;
  const connection = new ConnectDB();
  return connection.initConnection();
};

module.exports = {
  async get_All() {
    const { order_items, orders } = Models();

    return await order_items
      .findAll({
        raw: true,
        include: {
          model: orders,
          as: "num_order_order",
        },
      })
      .then((result) => {
        return result;
      });
  },

  async get_One(id) {
    const { order_items, orders } = Models();

    return await order_items
      .findAll({
        where: {
          num_order: id,
        },
        include: {
          model: orders,
          as: "num_order_order",
        },
      })
      .then((result) => {
        return result;
      });
  },

  async add(body) {
    const { orders } = Models();

    return await orders
      .create({ ...body })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  async update(body) {
    const { orders } = Models();

    return await orders
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
    const { orders } = Models();

    return await orders
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
