'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.Patient);
    }
  }
  Address.init({
    patientId: DataTypes.INTEGER,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    referencePoint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};