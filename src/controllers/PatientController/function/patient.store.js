const Patient = require("../../../database/models/patient.model");

module.exports.createNewPatient = async (req, res) => {
  console.log("patient");
  const patient = await Patient.findAll();
  return res.status(200).send({ message: patient });
};
