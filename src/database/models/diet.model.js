const { Model, DataTypes } = require("sequelize");

class Diet extends Model {
  static associate(models) {
    Diet.belongsTo(models.User);
    Diet.belongsTo(models.Patient)
  }
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        time: DataTypes.TIME,
        dietType: DataTypes.ENUM(
          "low carb",
          "dash",
          "paleolithic",
          "ketogenic",
          "dukan",
          "mediterranean",
          "other"
        ),
        description: DataTypes.STRING,
        systemStatus: DataTypes.BOOLEAN,
        patientId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "diet",
        tableName: "Diets"
      }
    );
  }
}

module.exports = Diet;
