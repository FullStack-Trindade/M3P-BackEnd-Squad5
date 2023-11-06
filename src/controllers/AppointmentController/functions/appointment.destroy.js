const Appointment = require("../../../database/models/appointment.model");
const Logger = require("../../../services/logger");
const {log} = require("../../../services/logger");

module.exports.deleteAppointment = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id da consulta deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const appointment = await Appointment.destroy({
      where: {
        id: id,
      },
    });

    if (appointment == 0) {
      return res
        .status(400)
        .send({ message: `Nenhuma consulta localizada pelo id: ${id}` });
    } else {
      await log(res.locals.currentUser, `a consulta ${id}`, req);
      return res
        .status(200)
        .send({ message: "Consulta foi deletada com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
