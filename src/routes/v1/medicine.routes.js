const router = require("express").Router();
const MedicineController = require("../../controllers/MedicineController");

const {
  validateData: MedicineCreateValidator,
} = require("../../middlewares/yupValidate/Medicine/createMedicine.middleware");
const {
  validateData: MedicineUpdateValidator,
} = require("../../middlewares/yupValidate/Medicine/updateMedicine.middleware");

const { authVerify } = require("../../middlewares/auth/auth.middleware");

const {
  nurse: PermissionValidator,
} = require("../../middlewares/auth/permissions.middleware");

router.get(
  "/medicamentos",
  authVerify,
  PermissionValidator,
  MedicineController.index
);
router.get(
  "/medicamentos/:id",
  authVerify,
  PermissionValidator,
  MedicineController.index
);
router.post(
  "/medicamentos",
  authVerify,
  PermissionValidator,
  MedicineCreateValidator,
  MedicineController.store
);
router.put(
  "/medicamentos/:id",
  authVerify,
  PermissionValidator,
  MedicineUpdateValidator,
  MedicineController.update
);
router.delete(
  "/medicamentos/:id",
  authVerify,
  PermissionValidator,
  MedicineController.destroy
);

module.exports = router;
