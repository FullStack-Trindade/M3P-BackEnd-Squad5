const Appointment = require("../../../database/models/appointment.model");

module.exports.findAllAppointment = async (req, res) => {
  try {
    const {
      query: { patientId },
    } = req;
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
