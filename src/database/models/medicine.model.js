"use strict";
const { Model } = require("sequelize");

const patientModel = require("./patient.model");

module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Medicine.belongsTo(patientModel);
    }
  }
  Medicine.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      type: DataTypes.ENUM,
      amount: DataTypes.FLOAT,
      unit: DataTypes.ENUM,
      comments: DataTypes.STRING,
      systemStatus: DataTypes.BOOLEAN,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Medicine",
    }
  );
  return Medicine;
};
