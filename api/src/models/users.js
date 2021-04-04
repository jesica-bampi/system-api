const Models = () => {
  const ConnectDB = require("../../database/connect").ConnectDB;
  const connection = new ConnectDB();
  return connection.initConnection();
};

module.exports = {
  async get_All() {
    const { users } = Models();

    return await users
      .findAll({
        raw: true,
      })
      .then((result) => {
        return result;
      });
  },

  async get_One(id) {
    const { users } = Models();

    return await users.findByPk(id).then((result) => {
      return result;
    });
  },

  async add(body) {
    const { users } = Models();

    return await users
      .create({ ...body })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  async update(body) {
    const { users } = Models();

    return await users
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
    const { users } = Models();

    return await users
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
