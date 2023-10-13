"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init(
    {
      birthday: DataTypes.DATE,
      rg: DataTypes.STRING,
      civilStatus: DataTypes.STRING,
      nationality: DataTypes.STRING,
      emergencyContact: DataTypes.STRING,
      listOfAllergies: DataTypes.STRING,
      specificCare: DataTypes.STRING,
      healthInsurance: DataTypes.STRING,
      insuranceNumber: DataTypes.STRING,
      insuranceExpirationDate: DataTypes.DATE,
      userId: DataTypes.INTEGER,
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
