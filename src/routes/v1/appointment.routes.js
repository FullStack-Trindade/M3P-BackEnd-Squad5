const router = require("express").Router();
const AppointmentController = require("../../controllers/AppointmentController");

const {
  validateData: AppointmentCreateValidator,
} = require("../../middlewares/yupValidate/Appointment/createAppointment.middleware");
const {
  validateData: AppointmentUpdateValidator,
} = require("../../middlewares/yupValidate/Appointment/updateAppointment.middleware");

router.post(
  "/consulta",
  AppointmentCreateValidator,
  AppointmentController.store
);
router.put(
  "/consulta/:id",
  AppointmentUpdateValidator,
  AppointmentController.update
);

module.exports = router;
