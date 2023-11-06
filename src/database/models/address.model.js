"use strict";
const { Model, DataTypes } = require("sequelize");

const userModel = require("./user.model");
const patientModel = require("./patient.model");

class Address extends Model {
  static associate(models) {
    Address.hasOne(models.Patient);
    Address.belongsTo(userModel);
  }
  static init(sequelize) {
    super.init(
      {
        zipCode: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        complement: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        referencePoint: DataTypes.STRING,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "address",
        tableName: "Addresses",
      }
    );
  }
}

module.exports = Address;
