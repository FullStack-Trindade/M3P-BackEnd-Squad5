const connection = require("../../../database");

const Patient = require("../../../database/models/patient.model");
const Address = require("../../../database/models/address.model");

const { translate } = require("../../../services/translate");
const {log} = require("../../../services/logger");

module.exports.createNewPatient = async (req, res) => {
  try {
    const {
      body: {
        fullName,
        gender,
        birthday,
        cpf,
        rg,
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
        userId,
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

    let transaction;
    transaction = await connection.transaction();
    try {
      const { id: addressId } = await Address.create(
        {
          zipCode,
          city,
          state,
          street,
          number,
          complement,
          neighborhood,
          referencePoint,
          userId,
        },
        { transaction }
      );

      const patientObject = {
        fullName,
        gender,
        birthday: new Date(birthday),
        cpf,
        rg,
        type: "patient",
        civilStatus: await translate(civilStatus),
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
        userId,
        addressId,
      };

      await Patient.create(patientObject, {
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      if (transaction) await transaction.rollback();
      let err = new Error();
      err = error;
      throw err;
    }

    await log(res.locals.currentUser, `o paciente ${fullName}`, req);
    return res.status(201).send({ message: "Paciente criado com sucesso" });
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
