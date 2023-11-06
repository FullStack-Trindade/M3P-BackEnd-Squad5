const connection = require("../../../database");

const Patient = require("../../../database/models/patient.model");
const Address = require("../../../database/models/address.model");

const { log } = require("../../../services/logger");

module.exports.updatePatient = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        fullName,
        gender,
        birthday,
        civilStatus,
        phoneNumber,
        email,
        nationality,
        emergencyContact,
        listOfAllergies,
        specificCare,
        healthInsurance,
        insuranceNumber,
        insuranceExpirationDate,
        systemStatus = true,

        address: {
          zipCode,
          city,
          state,
          street,
          number,
          complement,
          neighborhood,
          referencePoint,
        },
      },
    } = req;

    const transaction = await connection.transaction();
    try {
      const patient = await Patient.findByPk(id);
      const { addressId } = patient;
      await Patient.update(
        {
          fullName,
          gender,
          birthday,
          civilStatus,
          phoneNumber,
          email,
          nationality,
          emergencyContact,
          listOfAllergies,
          specificCare,
          healthInsurance,
          insuranceNumber,
          insuranceExpirationDate,
          systemStatus,
        },
        { where: { id }, transaction }
      );

      await Address.update(
        {
          zipCode,
          city,
          state,
          street,
          number,
          complement,
          neighborhood,
          referencePoint,
        },
        { where: { id: addressId }, transaction }
      );

      await transaction.commit();
    } catch (error) {
      if (transaction) await transaction.rollback();
      let err = new Error();
      err = error;
      throw err;
    }

    await log(res.locals.currentUser, `o paciente ${fullName}`, req);
    return res.status(200).send({ message: "Paciente atualizado com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(409)
        .send({ message: error.message, errors: error.errors });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
