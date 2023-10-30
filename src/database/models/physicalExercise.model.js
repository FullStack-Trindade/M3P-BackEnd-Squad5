const { Model, DataTypes } = require("sequelize");
class PhysicalExercise extends Model {
  static associate(models) {}
  static init(sequelize) {
    super.init(
      {
        exerciseName: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        time: DataTypes.TIME,
        exerciseType: DataTypes.ENUM(
          "aerobic endurance",
          "muscular endurance",
          "flexibility",
          "strength",
          "agility",
          "other"
        ),
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
  }
}

module.exports = PhysicalExercise;
