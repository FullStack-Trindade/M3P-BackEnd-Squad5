"use strict";
const { Model, DataTypes } = require("sequelize");

class Medicine extends Model {
  static associate(models) {
    Medicine.belongsTo(models.User);
    Medicine.belongsTo(models.Patient);
  }
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        time: DataTypes.TIME,
        medicineType: DataTypes.ENUM(
          "capsule",
          "pill",
          "liquid",
          "cream",
          "gel",
          "inhalation",
          "injection",
          "spray"
        ),
        amount: DataTypes.FLOAT,
        unit: DataTypes.ENUM("mg", "mcg", "g", "ml", "%"),
        comments: DataTypes.STRING,
        systemStatus: DataTypes.BOOLEAN,
        patientId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "medicine",
        tableName: "Medicines"
      }
    );
  }
}

module.exports = Medicine;
