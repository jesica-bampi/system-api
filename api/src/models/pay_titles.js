const Models = () => {
    const ConnectDB = require("../../database/connect").ConnectDB;
    const connection = new ConnectDB();
    return connection.initConnection();
  };
  
  module.exports = {
    async get_All() {
      const { pay_titles } = Models();
  
      return await pay_titles
        .findAll({
          raw: true,
        })
        .then((result) => {
          return result;
        });
    },
  
    async get_One(id) {
      const { pay_titles } = Models();
  
      return await pay_titles.findByPk(id).then((result) => {
        return result;
      });
    },
  
    async add(body) {
      const { pay_titles } = Models();
  
      return await pay_titles
        .create({ ...body })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  
    async update(body) {
      const { pay_titles } = Models();
  
      return await pay_titles
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
      const { pay_titles } = Models();
  
      return await pay_titles
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