const router = require("express").Router();
const MedicineController = require("../../controllers/MedicineController");

const {
  validateData: MedicineCreateValidator,
} = require("../../middlewares/yupValidate/Medicine/createMedicine.middleware");
const {
  validateData: MedicineUpdateValidator,
} = require("../../middlewares/yupValidate/Medicine/updateMedicine.middleware");

router.get("/medicamentos", MedicineController.index)
router.post("/medicamentos", MedicineCreateValidator, MedicineController.store);
router.put("/medicamentos/:id", MedicineUpdateValidator, MedicineController.update);


module.exports = router;