const router = require("express").Router();

const UserRouter = require("./v1/user.routes");
const AppointmentRouter = require("./v2/appointment.routes");

router.use("/api", UserRouter);
router.use("/api", AppointmentRouter);

module.exports = router;
