const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pay_titles', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    date_update: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    obs: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pay_titles',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_titles_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
