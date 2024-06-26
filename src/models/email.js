'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  email.init({
    email_behalf: DataTypes.STRING,
    email: DataTypes.STRING,
    protocol: DataTypes.STRING,
    smtp_host: DataTypes.STRING,
    smtp_user: DataTypes.STRING,
    smtp_pass: DataTypes.STRING,
    smtp_port: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'email',
  });
  return email;
};