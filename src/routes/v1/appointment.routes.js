const router = require("express").Router();
const AppointmentController = require("../../controllers/AppointmentController");

const {
  validateData: AppointmentCreateValidator,
} = require("../../middlewares/yupValidate/Appointment/createAppointment.middleware");
const {
  validateData: AppointmentUpdateValidator,
} = require("../../middlewares/yupValidate/Appointment/updateAppointment.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  medic: PermissionValidator
} = require("../../middlewares/auth/permissions.middleware");

router.get("/consultas",
  authVerify,
  PermissionValidator,
  AppointmentController.index
);
router.get("/consultas/:id",
  authVerify,
  PermissionValidator,
  AppointmentController.index
);
router.post(
  "/consultas",
  authVerify,
  PermissionValidator,
  AppointmentCreateValidator,
  AppointmentController.store
);
router.delete("/consultas/:id",
  authVerify,
  PermissionValidator,
  AppointmentController.destroy
);

router.put(
  "/consultas/:id",
  authVerify,
  PermissionValidator,
  AppointmentUpdateValidator,
  AppointmentController.update
);

module.exports = router;
