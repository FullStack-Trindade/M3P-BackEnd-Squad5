const { createNewPatient } = require("./function/patient.store");

class PatientController {
  async store(req, res) {
    await createNewPatient(req, res);
  }
}

module.exports = new PatientController();
