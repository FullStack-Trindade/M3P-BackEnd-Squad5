const router = require("express").Router();

const UserRouter = require("./v1/user.routes");
const AppointmentRouter = require("./v1/appointment.routes");
const MedicineRouter = require("./v1/medicine.routes");

router.use("/api", UserRouter);
router.use("/api", AppointmentRouter);
router.use("/api", MedicineRouter)

module.exports = router;
