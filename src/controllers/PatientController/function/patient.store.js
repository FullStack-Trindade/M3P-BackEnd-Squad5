const Patient = require("../../../database/models/patient.model");

module.exports.createNewPatient = async (req, res) => {
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
  // const patient = await Patient.findAll();
  return res.status(200).send({ message: req.body });
};
