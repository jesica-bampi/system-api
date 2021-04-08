const Models = () => {
    const ConnectDB = require("../../database/connect").ConnectDB;
    const connection = new ConnectDB();
    return connection.initConnection();
  };
  
  module.exports = {
    async get_All() {
      const { products } = Models();
  
      return await products
        .findAll({
          raw: true,
        })
        .then((result) => {
          return result;
        });
    },
  
    async get_One(id) {
      const { products } = Models();
  
      return await products.findByPk(id).then((result) => {
        return result;
      });
    },
  
    async add(body) {
      const { products } = Models();
  
      return await products
        .create({ ...body })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  
    async update(body) {
      const { products } = Models();
  
      return await products
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
      const { products } = Models();
  
      return await products
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
  