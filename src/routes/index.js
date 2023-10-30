const router = require("express").Router();

const UserRouter = require("./v1/user.routes");
const AppointmentRouter = require("./v1/appointment.routes");
const ExamRouter = require("./v1/exam.routes");
const MedicineRouter = require("./v1/medicine.routes");
const PatientRouter = require("./v1/patient.routes");
const DietRouter = require("./v1/diet.routes");
const ExerciseRouter = require("./v1/physicalExercise.routes");

router.use("/api", [
  UserRouter,
  AppointmentRouter,
  ExamRouter,
  MedicineRouter,
  PatientRouter,
  DietRouter,
  ExerciseRouter,
]);

module.exports = router;
