const router = require("express").Router();
const ExamController = require("../../controllers/ExamController");

const {
  validateData: ExamCreateValidator,
} = require("../../middlewares/yupValidate/Exam/createExam.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  medic: PermissionValidator
} = require("../../middlewares/auth/permissions.middleware");

router.post("/exames", authVerify, PermissionValidator, ExamCreateValidator, ExamController.store);

module.exports = router;
