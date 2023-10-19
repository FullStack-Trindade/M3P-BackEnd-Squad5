const router = require("express").Router();
const AppointmentController = require("../../controllers/AppointmentController");
const {
  validateData: AppointmentCreateValidator,
} = require("../../middlewares/yupValidate/Appointment/createAppointment..middleware");

router.post(
  "/consulta",
  AppointmentCreateValidator,
  AppointmentController.store
);

module.exports = router;
