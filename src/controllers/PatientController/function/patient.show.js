const Patient = require("../../../database/models/patient.model");
const Address = require("../../../database/models/address.model");

module.exports.findOnePatients = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    if (id && isNaN(id)) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }

    const patient = await Patient.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Address,
        attributes: [
          "zipCode",
          "city",
          "state",
          "street",
          "number",
          "complement",
          "neighborhood",
          "referencePoint",
        ],
      },
    });

    if (!patient) {
      return res.status(400).send({
        data: [],
        message: `Nenhum paciente encontrado com o ID ${id}`,
      });
    } else {
      return res.status(200).send(patient);
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
