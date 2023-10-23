const { Model, DataTypes } = require("sequelize");

const patientModel = require("./patient.model");
const addressModel = require("./address.model");

class User extends Model {
  static associate(models) {
    User.hasMany(patientModel, {
      foreignKey: "userId",
    });

    User.hasMany(addressModel, {
      foreignKey: "userId",
    });

    User.belongsToMany(patientModel, {
      through: "Appointment",
    });

    User.belongsToMany(patientModel, {
      through: "Diet",
    });
    User.belongsToMany(patientModel, {
      through: "Exam",
    });
    User.belongsToMany(patientModel, {
      through: "Medicine",
    });
    User.belongsToMany(patientModel, {
      through: "PhysicalExercise",
    });
  }
  static init(sequelize) {
    super.init(
      {
        fullName: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            args: true,
            msg: "E-mail already exists",
          },
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            args: true,
            msg: "CPF already exists",
          },
        },
        phoneNumber: DataTypes.STRING,
        type: DataTypes.STRING,
        systemStatus: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }
}

module.exports = User;
