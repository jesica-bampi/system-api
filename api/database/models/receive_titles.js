const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receive_titles', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    sale_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sales',
        key: 'id'
      }
    },
    date_updated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
    tableName: 'receive_titles',
    schema: 'pg',
    timestamps: false,
    indexes: [
      {
        name: "pk_receive_titles_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
