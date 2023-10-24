const router = require("express").Router();

const UserRouter = require("./v1/user.routes");
const AppointmentRouter = require("./v1/appointment.routes");
const DietRouter = require("./v1/diet.routes");

router.use("/api", UserRouter);
router.use("/api", AppointmentRouter);
router.use("/api", DietRouter);

module.exports = router;
