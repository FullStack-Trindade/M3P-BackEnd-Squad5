const {Model, DataTypes} = require('sequelize');

class Log extends Model {
  static associate(models) {
    // define association here
  }

  static init(sequelize) {
    super.init({
      message: DataTypes.STRING,
      endpoint: DataTypes.STRING,
      httpVerb: DataTypes.ENUM("get", "post", "put", "delete")
    }, {
      sequelize,
      modelName: 'Log',
    })
  }
}

module.exports = Log;
