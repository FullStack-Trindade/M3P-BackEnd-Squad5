const router = require("express").Router();

const UserRouter = require("./v1/user.routes");
const AppointmentRouter = require("./v1/appointment.routes");
const ExamRouter = require("./v1/exam.routes");

router.use("/api", UserRouter);
router.use("/api", AppointmentRouter);
router.use("/api", ExamRouter);

module.exports = router;
