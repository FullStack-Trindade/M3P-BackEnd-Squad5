const router = require("express").Router();
const {
  validateData,
} = require("../../middlewares/yupValidate/User/createUser.middleware");
const UserController = require("../../controllers/UserController");

router.get("/usuarios", UserController.index);
router.post("/usuarios", validateData, UserController.store);
router.delete("/usuarios/:id", UserController.destroy);

module.exports = router;
