const { Model, DataTypes } = require("sequelize");

class Patient extends Model {
  static associate(models) {
    Patient.belongsTo(models.Address, { foreignKey: "addressId" });

    Patient.belongsTo(models.User);

    Patient.hasMany(models.Appointment);

    Patient.hasMany(models.Diet);

    Patient.hasMany(models.Exam);

    Patient.hasMany(models.Medicine);

    Patient.hasMany(models.PhysicalExercise);
  }

  static init(sequelize) {
    super.init(
      {
        fullName: DataTypes.STRING,
        gender: DataTypes.ENUM({
          values: ["male", "female", "other"]
        }),
        birthday: DataTypes.DATE,
        cpf: DataTypes.STRING,
        rg: DataTypes.STRING,
        civilStatus: DataTypes.ENUM({
          values: ["single", "married", "divorced", "widowed", "separated"],
        }),
        phoneNumber: DataTypes.STRING,
        email: DataTypes.STRING,
        nationality: DataTypes.STRING,
        emergencyContact: DataTypes.STRING,
        listOfAllergies: DataTypes.STRING,
        specificCare: DataTypes.STRING,
        healthInsurance: DataTypes.STRING,
        insuranceNumber: DataTypes.STRING,
        insuranceExpirationDate: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        addressId: DataTypes.INTEGER,
        systemStatus: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        modelName: "patient",
        tableName: "Patients",
      }
    );
  }
}
module.exports = Patient;
