const Models = () => {
    const ConnectDB = require("../../database/connect").ConnectDB;
    const connection = new ConnectDB();
    return connection.initConnection();
  };
  
  module.exports = {
    async get_All() {
      const { order_items } = Models();
  
      return await order_items
        .findAll({
          raw: true,
        })
        .then((result) => {
          return result;
        });
    },
  
    async get_One(id) {
      const { order_items } = Models();
  
      return await order_items.findByPk(id).then((result) => {
        return result;
      });
    },
  
    async add(body) {
      const { order_items } = Models();
  
      return await order_items
        .create({ ...body })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  
    async update(body) {
      const { order_items } = Models();
  
      return await order_items
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
      const { order_items } = Models();
  
      return await order_items
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