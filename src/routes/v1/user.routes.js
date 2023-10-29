const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const {
  validateData: UserCreateValidator,
} = require("../../middlewares/yupValidate/User/createUser.middleware");
const {
  validateData: resetPasswordValidator,
} = require("../../middlewares/yupValidate/User/resetUserPassword.middleware");
const {
  validateData: UserUpdateValidator,
} = require("../../middlewares/yupValidate/User/updateUser.middleware");
const {
  validateData: LoginValidator,
} = require("../../middlewares/yupValidate/Login/login.middleware");
const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  admin: PermissionValidator
} = require("../../middlewares/auth/permissions.middleware");

router.post(
  "/usuarios/resetarsenha",
  LoginValidator,
  resetPasswordValidator,
  UserController.resetPassword
);
router.post("/usuarios/login", LoginValidator, UserController.login);
router.delete("/usuarios/:id", authVerify, PermissionValidator, UserController.destroy);
router.put("/usuarios/:id", authVerify, PermissionValidator, UserUpdateValidator, UserController.update);
router.post("/usuarios", authVerify, PermissionValidator, UserCreateValidator, UserController.store);
router.get("/usuarios", authVerify, PermissionValidator, UserController.index);

module.exports = router;
