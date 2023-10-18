const { createNewAppointment } = require("./functions/appointment.store");

class AppointmentController {
  async store(req, res) {
    await createNewAppointment(req, res);
  }
}

module.exports = new AppointmentController();
