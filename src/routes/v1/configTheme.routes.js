const router = require("express").Router();
const ConfigThemeController = require("../../controllers/ConfigThemeController");

const {
  validateData: ConfigThemeCreateValidator,
} = require("../../middlewares/yupValidate/ConfigTheme/createConfigTheme.middleware");
const {
  validateData: ConfigThemeUpdateValidator,
} = require("../../middlewares/yupValidate/ConfigTheme/updateConfigTheme.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  admin: PermissionValidator,
} = require("../../middlewares/auth/permissions.middleware");

router.get(
  "/configuracao",
  authVerify,
  PermissionValidator,
  ConfigThemeController.index
);
router.get(
  "/configuracao/:id",
  authVerify,
  PermissionValidator,
  ConfigThemeController.index
);

router.post(
  "/configuracao",
  authVerify,
  PermissionValidator,
  ConfigThemeCreateValidator,
  ConfigThemeController.store
);

router.put(
  "/configuracao/:id",
  authVerify,
  PermissionValidator,
  ConfigThemeUpdateValidator,
  ConfigThemeController.update
);

router.delete(
  "/configuracao/:id",
  authVerify,
  PermissionValidator,
  ConfigThemeController.destroy
);

module.exports = router;
