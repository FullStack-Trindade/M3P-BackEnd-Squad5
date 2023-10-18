const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/user.model");
const Appointment = require("./models/appointment.model");
const connection = new Sequelize(configDB);

User.init(connection);
Appointment.init(connection);

module.exports = connection;
