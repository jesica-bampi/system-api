class ConnectDB {
    constructor() {
      require('dotenv').config();
      this.DB_HOST = process.env.DB_HOST
      this.DB_USERNAME = process.env.DB_USERNAME
      this.DB_PASSWORD = process.env.DB_PASSWORD
      this.POSTGRES_DB = process.env.DB_DB
      this.POSTGRES_PORT = process.env.DB_PORT
      this.TYPE_DB = process.env.DB_TYPE
    }
  
    initConnection() {
      const {
        Sequelize
      } = require('sequelize');
      const sequelize = new Sequelize(
        this.POSTGRES_DB,
        this.DB_USERNAME,
        this.DB_PASSWORD, {
          host: this.DB_HOST,
          port: this.POSTGRES_PORT,
          logging: false,
          dialect: this.TYPE_DB
        }
      );
      const modelInstance = require('./models/init-models');
      const models = modelInstance.initModels(sequelize)
      return models;
    }
  }
  
  module.exports = {
    ConnectDB: ConnectDB
  }