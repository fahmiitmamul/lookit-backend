'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class national_holiday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  national_holiday.init({
    date: DataTypes.STRING,
    holiday_name: DataTypes.STRING,
    holiday_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'national_holiday',
  });
  return national_holiday;
};