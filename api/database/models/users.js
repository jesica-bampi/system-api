const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    'e-mail': {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_users_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
