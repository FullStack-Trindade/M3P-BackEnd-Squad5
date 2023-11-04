const router = require("express").Router();
const LogController = require("../../controllers/LogController");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  admin: PermissionValidator,
} = require("../../middlewares/auth/permissions.middleware");

router.get("/logs", authVerify, PermissionValidator, LogController.index);

module.exports = router;