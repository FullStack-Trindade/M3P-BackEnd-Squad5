const router = require("express").Router();
const AppointmentController = require("../../controllers/AppointmentController");

const {
  validateData: AppointmentCreateValidator,
} = require("../../middlewares/yupValidate/Appointment/createAppointment.middleware");
const {
  validateData: AppointmentUpdateValidator,
} = require("../../middlewares/yupValidate/Appointment/updateAppointment.middleware");

router.get("/consultas", AppointmentController.index);
router.get("/consultas/:id", AppointmentController.index);
router.post(
  "/consultas",
  AppointmentCreateValidator,
  AppointmentController.store
);
router.delete("/consultas/:id", AppointmentController.destroy);
router.put(
  "/consultas/:id",
  AppointmentUpdateValidator,
  AppointmentController.update
);

module.exports = router;
