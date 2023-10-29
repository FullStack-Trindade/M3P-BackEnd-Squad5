const connection = require("../../../database");

const Patient = require("../../../database/models/patient.model");
const Address = require("../../../database/models/address.model");

module.exports.findAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({
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

    return res.status(200).send({ data: patients });
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
