const { Model, DataTypes } = require("sequelize");

class Appointment extends Model {
  static associate(models) {
    Appointment.belongsTo(models.Patient);
    Appointment.belongsTo(models.User);
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
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "appointment",
        tableName: "Appointments"
      }
    );
  }
}

module.exports = Appointment;
