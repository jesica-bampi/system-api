const Models = () => {
    const ConnectDB = require("../../database/connect").ConnectDB;
    const connection = new ConnectDB();
    return connection.initConnection();
  };
  
  module.exports = {
    async get_All() {
      const { stocks } = Models();
  
      return await stocks
        .findAll({
          raw: true,
        })
        .then((result) => {
          return result;
        });
    },
  
    async get_One(id) {
      const { stocks } = Models();
  
      return await stocks.findByPk(id).then((result) => {
        return result;
      });
    },
  
    async add(body) {
      const { stocks } = Models();
  
      return await stocks
        .create({ ...body })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  
    async update(body) {
      const { stocks } = Models();
  
      return await stocks
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
      const { stocks } = Models();
  
      return await stocks
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
  