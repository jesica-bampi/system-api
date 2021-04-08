const Models = () => {
    const ConnectDB = require("../../database/connect").ConnectDB;
    const connection = new ConnectDB();
    return connection.initConnection();
  };
  
  module.exports = {
    async get_All() {
      const { receive_titles } = Models();
  
      return await receive_titles
        .findAll({
          raw: true,
        })
        .then((result) => {
          return result;
        });
    },
  
    async get_One(id) {
      const { receive_titles } = Models();
  
      return await receive_titles.findByPk(id).then((result) => {
        return result;
      });
    },
  
    async add(body) {
      const { receive_titles } = Models();
  
      return await receive_titles
        .create({ ...body })
        .then((result) => {
          return result;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  
    async update(body) {
      const { receive_titles } = Models();
  
      return await receive_titles
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
      const { receive_titles } = Models();
  
      return await receive_titles
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
  