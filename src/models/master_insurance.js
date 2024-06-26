'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class master_insurance extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    master_insurance.init(
        {
            master_salary_code: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            insurance_name: { type: DataTypes.STRING, unique: true },
        },
        {
            sequelize,
            modelName: 'master_insurance',
        }
    )
    return master_insurance
}
