const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/user.model");
const Appointment = require("./models/appointment.model");
const Exam = require("./models/exam.model");

const connection = new Sequelize(configDB);

User.init(connection);
Appointment.init(connection);
Exam.init(connection);

module.exports = connection;
