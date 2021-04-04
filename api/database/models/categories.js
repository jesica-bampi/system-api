const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_categories_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
