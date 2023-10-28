const Patient = require("../../../database/models/patient.model");
const Address = require("../../../database/models/address.model");
const { translate } = require("../../../services/translate");

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
        systemStatus,
        userId = 1,
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

    const { id: addressId } = await Address.create({
      zipCode,
      city,
      state,
      street,
      number,
      complement,
      neighborhood,
      referencePoint,
      userId,
    });

    const patient = await Patient.create({
      fullName,
      gender,
      birthday,
      cpf,
      rg,
      type: "pacient",
      civilStatus: translate(civilStatus),
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
    });
    return res.status(200).send({ message: patient });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
