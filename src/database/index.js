const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/user.model");
const Appointment = require("./models/appointment.model");
const Medicine = require("./models/medicine.model");
const Exam = require("./models/exam.model");
const Patient = require("./models/patient.model");
const Address = require("./models/address.model");
const Diet = require("./models/diet.model");
const connection = new Sequelize(configDB);

User.init(connection);
Appointment.init(connection);
Medicine.init(connection);
Diet.init(connection);
Exam.init(connection);
Patient.init(connection);
Address.init(connection);

module.exports = connection;
