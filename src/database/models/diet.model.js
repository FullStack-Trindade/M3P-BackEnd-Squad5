'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diet.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    dietType: DataTypes.ENUM,
    description: DataTypes.STRING,
    systemStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Diet',
  });
  return Diet;
};