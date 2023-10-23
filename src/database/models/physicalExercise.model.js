"use strict";
const { Model } = require("sequelize");

const patientModel = require("./patient.model");

module.exports = (sequelize, DataTypes) => {
  class PhysicalExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  PhysicalExercise.init(
    {
      exerciseName: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      exerciseType: DataTypes.ENUM,
      quantityPerWeek: DataTypes.DECIMAL,
      description: DataTypes.STRING,
      systemStatus: DataTypes.BOOLEAN,
      patientId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PhysicalExercise",
    }
  );
  return PhysicalExercise;
};
