const router = require("express").Router();
const MedicalRecordController = require("../../controllers/MedicalRecordController");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  medic: PermissionValidator
} = require("../../middlewares/auth/permissions.middleware");

router.get("/prontuarios", authVerify, PermissionValidator, MedicalRecordController.index);

module.exports = router;
