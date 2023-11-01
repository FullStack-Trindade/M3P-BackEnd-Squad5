const router = require("express").Router();
const ExamController = require("../../controllers/ExamController");

const {
  validateData: ExamCreateValidator,
} = require("../../middlewares/yupValidate/Exam/createExam.middleware");
const {
  validateData: ExamUpdateValidator,
} = require("../../middlewares/yupValidate/Exam/updateExam.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  medic: PermissionValidator,
} = require("../../middlewares/auth/permissions.middleware");

router.post(
  "/exames",
  authVerify,
  PermissionValidator,
  ExamCreateValidator,
  ExamController.store
);

router.put(
  "/exames",
  authVerify,
  PermissionValidator,
  ExamUpdateValidator,
  ExamController.update
);
router.get("/exames", authVerify, PermissionValidator, ExamController.index);
router.get(
  "/exames/:id",
  authVerify,
  PermissionValidator,
  ExamController.index
);
router.delete(
  "/exames/:id",
  authVerify,
  PermissionValidator,
  ExamController.destroy
);

module.exports = router;
