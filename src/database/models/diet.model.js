const { Model, DataTypes } = require("sequelize");

class Diet extends Model {
  static associate(models) {}
  static init(sequelize) {
    super.init(
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
  }
}

module.exports = Diet;
