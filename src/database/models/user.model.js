const { Model, DataTypes } = require("sequelize");

class User extends Model {
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
