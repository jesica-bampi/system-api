const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    order_code: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    invoice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'suppliers',
        key: 'id'
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    date_update: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    paymente_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'payment_types',
        key: 'id'
      }
    },
    total_paid: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_o_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
