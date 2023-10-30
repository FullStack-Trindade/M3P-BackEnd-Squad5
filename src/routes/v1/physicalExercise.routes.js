const router = require("express").Router();

const {
  validateData: PhysicalExerciseCreateValidator,
} = require("../../middlewares/yupValidate/PhysicalExercise/PhysicalExercise.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  nurse: PermissionValidator,
} = require("../../middlewares/auth/permissions.middleware");
const PhysicalExerciseController = require("../../controllers/PhysicalExerciseController");

router.post(
  "/exercicios",
  authVerify,
  PermissionValidator,
  PhysicalExerciseController.store
);

module.exports = router;
