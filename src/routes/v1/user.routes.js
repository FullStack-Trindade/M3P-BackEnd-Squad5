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

router.post(
  "/usuarios/resetarsenha",
  LoginValidator,
  resetPasswordValidator,
  UserController.resetPassword
);
router.post("/usuarios/login", LoginValidator, UserController.login);
router.delete("/usuarios/:id", UserController.destroy);
router.put("/usuarios/:id", UserUpdateValidator, UserController.update);
router.post("/usuarios", UserCreateValidator, UserController.store);
router.get("/usuarios", authVerify, UserController.index);

module.exports = router;
