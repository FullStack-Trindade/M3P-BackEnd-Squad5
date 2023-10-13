const router = require("express").Router();

const UserRouter = require("./v1/user.routes");

router.use("/api", UserRouter);

module.exports = router;
