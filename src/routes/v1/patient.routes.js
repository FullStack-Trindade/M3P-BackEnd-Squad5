const router = require("express").Router();
const PatientController = require("../../controllers/PatientController");

const {
  validateData: createPatient,
} = require("../../middlewares/yupValidate/Patient/createPatient.middleware");

router.post("/pacientes", PatientController.store);

module.exports = router;
