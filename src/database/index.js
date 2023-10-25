const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/user.model");
const Appointment = require("./models/appointment.model");
const Medicine = require("./models/medicine.model");
const connection = new Sequelize(configDB);

User.init(connection);
Appointment.init(connection);
Medicine.init(connection);

module.exports = connection;
