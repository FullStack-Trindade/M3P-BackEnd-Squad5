const router = require("express").Router();
const PatientController = require("../../controllers/PatientController");

router.post("/pacientes", PatientController.store);

module.exports = router;
