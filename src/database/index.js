const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/user.model");
const Appointment = require("./models/appointment.model");
const Diet = require("./models/diet.model");
const connection = new Sequelize(configDB);

User.init(connection);
Appointment.init(connection);
Diet.init(connection);

module.exports = connection;
