"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Diet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Diet.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      time: DataTypes.TIME,
      dietType: DataTypes.ENUM,
      description: DataTypes.STRING,
      systemStatus: DataTypes.BOOLEAN,
      patientId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Diet",
    }
  );
  return Diet;
};
