const router = require("express").Router();

const {
  validateData: PhysicalExerciseCreateValidator,
} = require("../../middlewares/yupValidate/PhysicalExercise/CreatePhysicalExercise.middleware");
const {
  validateData: PhysicalExerciseUpdateValidator,
} = require("../../middlewares/yupValidate/PhysicalExercise/UpdatePhysicalExercise.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  nurse: PermissionValidator,
} = require("../../middlewares/auth/permissions.middleware");
const PhysicalExerciseController = require("../../controllers/PhysicalExerciseController");

router.get(
  "/exercicios",
  authVerify,
  PermissionValidator,
  PhysicalExerciseController.index
);
router.get(
  "/exercicios/:",
  authVerify,
  PermissionValidator,
  PhysicalExerciseController.index
);
router.post(
  "/exercicios",
  authVerify,
  PermissionValidator,
  PhysicalExerciseCreateValidator,
  PhysicalExerciseController.store
);
router.put(
  "/exercicios/:id",
  authVerify,
  PermissionValidator,
  PhysicalExerciseUpdateValidator,
  PhysicalExerciseController.update
);

module.exports = router;
