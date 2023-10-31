const connection = require("../../../database");

const Patient = require("../../../database/models/patient.model");
const Address = require("../../../database/models/address.model");
const { log } = require("../../../services/logger");

module.exports.findAllPatients = async (req, res) => {
  try {
    const {
      query: { email },
    } = req;

    if (email) {
      const patients = await Patient.findAll({
        where: { email },
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

      await log(res.locals.currentUser, `os pacientes`, req);
      return res.status(200).send({ data: patients });
    } else {
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

      await log(res.locals.currentUser, `os pacientes`, req);
      return res.status(200).send({ data: patients });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
