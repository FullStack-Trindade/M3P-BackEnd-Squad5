"use strict";
const { Model, DataTypes } = require("sequelize");

class Exam extends Model {
  static associate(models) {
    Exam.belongsTo(models.Patient);
    Exam.belongsTo(models.User);
  }

  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        examDate: DataTypes.DATEONLY,
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
        modelName: "exam",
        tableName: "Exams"
      }
    );
  }
}

module.exports = Exam;
