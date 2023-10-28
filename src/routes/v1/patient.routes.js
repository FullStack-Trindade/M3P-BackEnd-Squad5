const router = require("express").Router();
const PatientController = require("../../controllers/PatientController");

const {
  validateData: createPatientValidate,
} = require("../../middlewares/yupValidate/Patient/createPatient.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  nurse: PermissionValidator
} = require("../../middlewares/auth/permissions.middleware");

router.post("/pacientes", authVerify, PermissionValidator, createPatientValidate, PatientController.store);

module.exports = router;
