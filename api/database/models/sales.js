const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    total_value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    seller: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    payment_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'payment_types',
        key: 'id'
      }
    },
    date_update: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sales',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_sales_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
