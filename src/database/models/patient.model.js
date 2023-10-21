"use strict";
const { Model } = require("sequelize");

const addressModel = require("./address.model");
const userModel = require("./user.model");
const appointmentsModel = require("./appointment.model");
const dietsModel = require("./diet.model");
const examsModel = require("./exam.model");
const medicinesModel = require("./medicine.model");
const physicalExerciseModel = require("./physicalExercise.model");

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsTo(addressModel);

      Patient.belongsTo(userModel);

      Patient.hasMany(appointmentsModel, {
        foreignKey: "patientId",
      });
      Patient.hasMany(dietsModel, {
        foreignKey: "patientId",
      });
      Patient.hasMany(examsModel, {
        foreignKey: "patientId",
      });
      Patient.hasMany(medicinesModel, {
        foreignKey: "patientId",
      });
      Patient.hasMany(physicalExerciseModel, {
        foreignKey: "patientId",
      });
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

  return Patient;
};
