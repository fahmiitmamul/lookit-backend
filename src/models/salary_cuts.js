'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class salary_cuts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    salary_cuts.init(
        {
            salary_cuts_name: DataTypes.STRING,
            salary_cuts_value: DataTypes.STRING,
            salary_cuts_fixed_value: DataTypes.STRING,
            salary_cuts_count: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'salary_cuts',
        }
    )
    return salary_cuts
}
