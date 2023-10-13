const router = require("express").Router();

const UserController = require("../../controllers/UserController");

router.get("/usuarios", UserController.index);
router.post("/usuarios", UserController.store);

module.exports = router;
