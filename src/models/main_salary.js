'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class main_salary extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            main_salary.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
            })
        }
    }
    main_salary.init(
        {
            employee_id: DataTypes.INTEGER,
            main_salary: DataTypes.STRING,
            main_salary_count: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'main_salary',
        }
    )
    return main_salary
}
