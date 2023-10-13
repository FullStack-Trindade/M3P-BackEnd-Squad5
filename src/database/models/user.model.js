const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        fullName: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
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
