const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stocks', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sale_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'sales',
        key: 'id'
      }
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'stocks',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_stocks_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
