const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    site: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'suppliers',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_suppliers_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
