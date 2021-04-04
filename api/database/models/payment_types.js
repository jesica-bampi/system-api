const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_types', {
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
    tableName: 'payment_types',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_payment_type_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
