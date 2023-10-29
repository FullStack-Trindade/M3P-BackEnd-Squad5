const router = require("express").Router();
const PatientController = require("../../controllers/PatientController");

const {
  validateData: createPatientValidate,
} = require("../../middlewares/yupValidate/Patient/createPatient.middleware");

router.post("/pacientes", createPatientValidate, PatientController.store);
router.get("/pacientes", PatientController.index);

module.exports = router;
