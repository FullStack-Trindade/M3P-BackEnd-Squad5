const router = require("express").Router();
const DietController = require("../../controllers/DietController");

const {
  validateData: DietCreateValidator,
} = require("../../middlewares/yupValidate/Diet/createDiet.middleware");

const {
  validateData: DietUpdateValidator,
} = require("../../middlewares/yupValidate/Diet/updateDiet.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  nurse: PermissionValidator
} = require("../../middlewares/auth/permissions.middleware");

router.get("/dietas", authVerify, PermissionValidator, DietController.index);
router.get("/dietas/:id", authVerify, PermissionValidator, DietController.index);
router.post("/dietas", authVerify, PermissionValidator, DietCreateValidator, DietController.store);
router.put("/dietas/:id", authVerify, PermissionValidator, DietUpdateValidator, DietController.update);
router.delete("/dietas/:id", authVerify, PermissionValidator, DietController.destroy);

module.exports = router;
