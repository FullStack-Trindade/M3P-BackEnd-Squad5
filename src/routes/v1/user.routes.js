const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const {
  validateData: UserCreateValidator,
} = require("../../middlewares/yupValidate/User/createUser.middleware");
const {
  validateData: UserUpdateValidator,
} = require("../../middlewares/yupValidate/User/updateUser.middleware");
const {
  validateData: LoginValidator,
} = require("../../middlewares/yupValidate/Login/login.middleware");
const { authVerify } = require("../../middlewares/auth/auth.middleware");

router.get("/usuarios", authVerify, UserController.index);
router.post("/usuarios", UserCreateValidator, UserController.store);
router.put("/usuarios/:id", UserUpdateValidator, UserController.update);
router.delete("/usuarios/:id", UserController.destroy);
router.post("/usuarios/login", LoginValidator, UserController.login);

module.exports = router;
