'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class total_salary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            total_salary.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
            })
        }
    }
    total_salary.init(
        {
            employee_id: DataTypes.INTEGER,
            total_main_salary: DataTypes.STRING,
            total_addition: DataTypes.STRING,
            total_deduction: DataTypes.STRING,
            total_tax: DataTypes.STRING,
            thp: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'total_salary',
        }
    )
    return total_salary
}
