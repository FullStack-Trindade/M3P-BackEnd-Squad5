const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/user.model");
const Appointment = require("./models/appointment.model");
const Medicine = require("./models/medicine.model");
const Exam = require("./models/exam.model");
const Patient = require("./models/patient.model");
const Address = require("./models/address.model");
const Diet = require("./models/diet.model");
const Log = require("./models/log.model");
const PhysicalExercise = require("./models/physicalExercise.model");
const models = {User, Appointment, Medicine, Exam, Patient, Address, Diet, Log, PhysicalExercise}
const connection = new Sequelize(configDB);

for (let key in models) {
  models[key].init(connection);
}
for (let key in models) {
  models[key].associate(models);
}

module.exports = connection;
