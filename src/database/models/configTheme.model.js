const { Model, DataTypes } = require("sequelize");

class ConfigTheme extends Model {
  static associate(models) {
    ConfigTheme.belongsTo(models.User);
  }
  static init(sequelize) {
    super.init(
      {
        primaryColor: DataTypes.STRING,
        secondaryColor: DataTypes.STRING,
        primaryTextColor: DataTypes.STRING,
        secondaryTextColor: DataTypes.STRING,
        companyName: DataTypes.STRING,
        slogan: DataTypes.STRING,
        logo: DataTypes.STRING,
        userId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "configTheme",
        tableName: "ConfigThemes",
      }
    );
  }
}

module.exports = ConfigTheme;
