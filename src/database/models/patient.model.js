"use strict";
const { Model } = require("sequelize");
const addressModel = require("./address.model");

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsTo(addressModel);
    }
  }
  Patient.init(
    {
      fullName: DataTypes.STRING,
      gender: DataTypes.ENUM,
      birthday: DataTypes.DATE,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING,
      civilStatus: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      nationality: DataTypes.STRING,
      emergencyContact: DataTypes.STRING,
      listOfAllergies: DataTypes.STRING,
      specificCare: DataTypes.STRING,
      healthInsurance: DataTypes.STRING,
      insuranceNumber: DataTypes.STRING,
      insuranceExpirationDate: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      addressId: DataTypes.INTEGER,
      systemStatus: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );

  // Patient.associate = (models) => {
  //   Patient.hasOne(models.User);
  // };
  return Patient;
};
