"use strict";
const { Model, DataTypes } = require("sequelize");

class Medicine extends Model {
  static associate(models) {}
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        time: DataTypes.TIME,
        type: DataTypes.ENUM,
        amount: DataTypes.FLOAT,
        unit: DataTypes.ENUM,
        comments: DataTypes.STRING,
        systemStatus: DataTypes.BOOLEAN,
        patientId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Medicine",
      }
    );
  }
}

module.exports = Medicine;
