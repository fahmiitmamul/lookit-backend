'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class master_salary_deduction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    master_salary_deduction.init(
        {
            master_salary_code: {
                primaryKey: true,
                type: DataTypes.STRING,
                unique: true,
            },
            master_salary_name: { type: DataTypes.STRING, unique: true },
            master_salary_type: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'master_salary_deduction',
        }
    )
    return master_salary_deduction
}
