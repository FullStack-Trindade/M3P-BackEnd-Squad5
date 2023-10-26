const router = require("express").Router();
const ExamController = require("../../controllers/ExamController");

const {
  validateData: ExamCreateValidator,
} = require("../../middlewares/yupValidate/Exam/createExam.middleware");

router.post("/exames", ExamCreateValidator, ExamController.store);

module.exports = router;
