const router = require("express").Router();
const AppointmentController = require("../../controllers/AppointmentController");

router.post("/consulta", AppointmentController.store);

module.exports = router;
