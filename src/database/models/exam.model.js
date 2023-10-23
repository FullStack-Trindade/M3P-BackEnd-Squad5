"use strict";
const { Model } = require("sequelize");

const patientModel = require("./patient.model");

module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Exam.init(
    {
      name: DataTypes.STRING,
      examDate: DataTypes.DATE,
      examTime: DataTypes.TIME,
      examType: DataTypes.STRING,
      laboratory: DataTypes.STRING,
      documentURL: DataTypes.STRING,
      results: DataTypes.STRING,
      systemStatus: DataTypes.BOOLEAN,
      patientId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Exam",
    }
  );
  return Exam;
};
