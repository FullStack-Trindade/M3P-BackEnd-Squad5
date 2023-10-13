'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    type: DataTypes.STRING,
    systemStatus: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};