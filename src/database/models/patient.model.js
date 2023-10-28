const { Model, DataTypes } = require("sequelize");

const userModel = require("./user.model");
const addressModel = require("./address.model");

class Patient extends Model {
  static associate(models) {
    Patient.belongsTo(addressModel);
    Patient.belongsTo(userModel);

    Patient.belongsToMany(userModel, {
      through: "Appointment",
    });

    Patient.belongsToMany(userModel, {
      through: "Diet",
    });
    Patient.belongsToMany(userModel, {
      through: "Exam",
    });
    Patient.belongsToMany(userModel, {
      through: "Medicine",
    });
    Patient.belongsToMany(userModel, {
      through: "PhysicalExercise",
    });
  }

  static init(sequelize) {
    super.init(
      {
        fullName: DataTypes.STRING,
        gender: DataTypes.ENUM({
          values: ["single", "married", "divorced", "widowed", "separated"],
        }),
        birthday: DataTypes.DATE,
        cpf: DataTypes.STRING,
        rg: DataTypes.STRING,
        civilStatus: DataTypes.STRING,
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
        modelName: "Patient",
      }
    );
  }
}
module.exports = Patient;
