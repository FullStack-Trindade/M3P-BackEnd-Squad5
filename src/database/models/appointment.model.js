const { Model, DataTypes } = require("sequelize");

class Appointment extends Model {
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
      },
      {
        sequelize,
        modelName: "Appointment",
      }
    );
  }
}

module.exports = Appointment;
