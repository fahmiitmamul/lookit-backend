'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class main_salary_insurance extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            main_salary_insurance.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
            })
        }
    }
    main_salary_insurance.init(
        {
            employee_id: DataTypes.INTEGER,
            main_salary_insurance_value: DataTypes.JSONB,
        },
        {
            sequelize,
            modelName: 'main_salary_insurance',
        }
    )
    return main_salary_insurance
}
