const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static associate(models) {
    User.hasMany(models.Patient);
    User.hasMany(models.Address);
    User.hasMany(models.Appointment);
    User.hasMany(models.Diet);
    User.hasMany(models.Exam);
    User.hasMany(models.Medicine);
    User.hasMany(models.PhysicalExercise);
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
        modelName: "user",
        tableName: "Users"
      }
    );
  }
}

module.exports = User;
