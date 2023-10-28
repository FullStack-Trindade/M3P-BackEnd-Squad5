const Appointment = require("../../../database/models/appointment.model");

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
        const err = new Error("Consulta não encontrado");
        return res.status(400).send(` message: ${err} `);
      }
      return res.status(200).send({ data: appointment });
    }
    if (patientId) {
      const appointment = await Appointment.findAll({
        where: { patientId: patientId },
      });
      return res.status(200).send({ data: appointment });
    } else {
      const appointment = await Appointment.findAll();
      return res.status(200).send({ data: appointment });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
