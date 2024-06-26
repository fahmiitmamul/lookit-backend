'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class main_salary_bpjs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            main_salary_bpjs.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
            })
        }
    }
    main_salary_bpjs.init(
        {
            employee_id: DataTypes.INTEGER,
            main_salary_bpjs_value: DataTypes.JSONB,
            main_salary: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'main_salary_bpjs',
        }
    )
    return main_salary_bpjs
}
