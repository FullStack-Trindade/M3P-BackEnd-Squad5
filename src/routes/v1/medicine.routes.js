const router = require("express").Router();
const MedicineController = require("../../controllers/MedicineController");

const {
  validateData: MedicineCreateValidator,
} = require("../../middlewares/yupValidate/Medicine/createMedicine.middleware");

router.post(
  "/medicamentos",
  MedicineCreateValidator,
  MedicineController.store
);

module.exports = router;