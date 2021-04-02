const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    adress: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_client_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
