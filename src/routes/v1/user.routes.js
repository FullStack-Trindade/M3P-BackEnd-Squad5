const router = require("express").Router();
const {
  validateData: UserCreateValidator,
} = require("../../middlewares/yupValidate/User/createUser.middleware");
const {
  validateData: UserUpdateValidator,
} = require("../../middlewares/yupValidate/User/updateUser.middleware");
const UserController = require("../../controllers/UserController");

router.get("/usuarios", UserController.index);
router.put("/usuarios/:id", UserUpdateValidator, UserController.update);
router.post("/usuarios", UserCreateValidator, UserController.store);
router.delete("/usuarios/:id", UserController.destroy);

module.exports = router;
