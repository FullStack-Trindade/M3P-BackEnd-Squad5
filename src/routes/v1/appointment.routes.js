const router = require("express").Router();
const AppointmentController = require("../../controllers/AppointmentController");

const {
  validateData: AppointmentCreateValidator,
} = require("../../middlewares/yupValidate/Appointment/createAppointment.middleware");
const {
  validateData: AppointmentUpdateValidator,
} = require("../../middlewares/yupValidate/Appointment/updateAppointment.middleware");

router.get("/consultas", AppointmentController.index);
router.post(
  "/consulta",
  AppointmentCreateValidator,
  AppointmentController.store
);
router.delete("/consulta/:id", AppointmentController.destroy);
router.put(
  "/consulta/:id",
  AppointmentUpdateValidator,
  AppointmentController.update
);

module.exports = router;
