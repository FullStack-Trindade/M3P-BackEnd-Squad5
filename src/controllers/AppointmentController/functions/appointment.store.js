const Appointment = require("../../../database/models/appointment.model");
const { log } = require("../../../services/logger");

module.exports.createNewAppointment = async (req, res) => {
  try {
    const {
      body: {
        appointmentReason,
        appointmentDate,
        appointmentTime,
        description,
        prescriptionMedication,
        dosagePrecautions,
        patientId,
        userId,
        systemStatus = true,
      },
    } = req;
    await Appointment.create({
      appointmentReason,
      appointmentDate,
      appointmentTime,
      description,
      prescriptionMedication,
      dosagePrecautions,
      patientId,
      userId,
      systemStatus,
    });
    return res.status(201).send({ message: "Consulta criada com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
