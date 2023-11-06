const router = require("express").Router();
const PatientController = require("../../controllers/PatientController");

const {
  validateData: createPatientValidate,
} = require("../../middlewares/yupValidate/Patient/createPatient.middleware");
const {
  validateData: updatePatientValidate,
} = require("../../middlewares/yupValidate/Patient/updatePatient.middleware");

const {
  nurse: PermissionValidator,
} = require("../../middlewares/auth/permissions.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

router.post(
  "/pacientes",
  authVerify,
  PermissionValidator,
  createPatientValidate,
  PatientController.store
);
router.get(
  "/pacientes",
  authVerify,
  PermissionValidator,
  PatientController.index
);
router.get(
  "/pacientes/:id",
  authVerify,
  PermissionValidator,
  PatientController.show
);
router.put(
  "/pacientes/:id",
  authVerify,
  PermissionValidator,
  updatePatientValidate,
  PatientController.update
);
router.delete(
  "/pacientes/:id",
  authVerify,
  PermissionValidator,
  PatientController.destroy
);

module.exports = router;
