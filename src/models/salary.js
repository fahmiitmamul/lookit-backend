'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class salary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    salary.init(
        {
            main_salary: DataTypes.STRING,
            main_salary_count: DataTypes.STRING,
            additional_salary: DataTypes.JSONB,
            additional_salary_count: DataTypes.STRING,
            salary_cuts: DataTypes.JSONB,
            salary_cuts_count: DataTypes.STRING,
            bpjs: DataTypes.JSONB,
            bpjs_count: DataTypes.STRING,
            tax: DataTypes.JSONB,
            tax_count: DataTypes.STRING,
            another_additional_salary: DataTypes.JSONB,
            another_additional_salary_count: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'salary',
        }
    )
    return salary
}
