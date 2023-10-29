const Patient = require("../../../database/models/patient.model");

module.exports.deletePatient = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do paciente deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const patient = await Patient.destroy({
      where: {
        id: id,
      },
    });

    if (patient == 0) {
      return res
        .status(400)
        .send({ message: `Nenhum paciente localizado pelo id: ${id}` });
    } else {
      return res
        .status(202)
        .send({ message: "Paciente foi deletado com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
