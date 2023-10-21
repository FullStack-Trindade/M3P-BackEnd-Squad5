const { Model, DataTypes } = require("sequelize");

const patientModel = require("./patient.model");

class Appointment extends Model {
  static associate(models) {
    Appointment.belongsTo(patientModel);
  }
  static init(sequelize) {
    super.init(
      {
        appointmentReason: DataTypes.STRING,
        appointmentDate: DataTypes.DATEONLY,
        appointmentTime: DataTypes.TIME,
        description: DataTypes.STRING,
        prescriptionMedication: DataTypes.STRING,
        dosagePrecautions: DataTypes.STRING,
        systemStatus: DataTypes.BOOLEAN,
        patientId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Appointment",
      }
    );
  }
}

module.exports = Appointment;
