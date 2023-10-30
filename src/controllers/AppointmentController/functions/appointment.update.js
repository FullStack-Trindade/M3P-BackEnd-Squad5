const Appointment = require("../../../database/models/appointment.model");
const {log} = require("../../../services/logger");

module.exports.updateAppointment = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        appointmentReason,
        appointmentDate,
        appointmentTime,
        description,
        prescriptionMedication,
        dosagePrecautions,
        patientId,
        userId,
        systemStatus,
      },
    } = req;
    const [appointment] = await Appointment.update(
      {
        appointmentReason,
        appointmentDate,
        appointmentTime,
        description,
        prescriptionMedication,
        dosagePrecautions,
        patientId,
        userId,
        systemStatus,
      },
      { where: { id } }
    );
    if (appointment == 0) {
      return res.status(400).send({ message: "Consulta não encontrado" });
    } else {
      await log(res.locals.currentUser, `a consulta ${id}`, req, patientId);
      return res
        .status(200)
        .send({ message: "Consulta atualizada com sucesso" });
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
