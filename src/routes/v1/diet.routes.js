const router = require("express").Router();
const DietController = require("../../controllers/DietController");

const {
  validateData: DietCreateValidator,
} = require("../../middlewares/yupValidate/Diet/createDiet.middleware");

const {
  validateData: DietUpdateValidator,
} = require("../../middlewares/yupValidate/Diet/updateDiet.middleware");

router.post("/dietass", DietCreateValidator, DietController.store);
router.put("/dietas/:id", DietUpdateValidator, DietController.update);

module.exports = router;
