const Appointment = require("../../../database/models/appointment.model");
const Logger = require("../../../services/logger")
const {log} = require("../../../services/logger");

module.exports.findAllAppointment = async (req, res) => {
  try {
    const {
      params: { id },
      query: { patientId },
    } = req;
    if ((patientId && isNaN(patientId)) || (id && isNaN(id))) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    if (id) {
      const appointment = await Appointment.findByPk(id);
      if (!appointment) {
        const err = new Error("Consulta não encontrada");
        return res.status(400).send(` message: ${err} `);
      }
      await log(res.locals.currentUser, `a consulta ${id}`, req, appointment.patientId);
      return res.status(200).send({ data: appointment });
    }

    const appointment = await (patientId
            ? Appointment.findAll({where: { patientId: patientId }})
            : Appointment.findAll()
    );
    await log(res.locals.currentUser, `as consultas`, req, patientId);
    return res.status(200).send({ data: appointment });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
