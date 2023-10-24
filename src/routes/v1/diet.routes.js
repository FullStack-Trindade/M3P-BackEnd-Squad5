const router = require("express").Router();
const DietController = require("../../controllers/DietController");

const {
  validateData: DietCreateValidator,
} = require("../../middlewares/yupValidate/Diet/createDiet.middleware");

router.post("/dieta", DietCreateValidator, DietController.store);

module.exports = router;
