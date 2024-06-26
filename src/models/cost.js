'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class cost extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    cost.init(
        {
            cost_name: DataTypes.STRING,
            cost_type: DataTypes.STRING,
            cost_payment_type: DataTypes.STRING,
            cost_date: DataTypes.DATE,
            cost_status: DataTypes.STRING,
            cost_value: DataTypes.STRING,
            cost_tax_percentage: DataTypes.STRING,
            cost_tax_result: DataTypes.STRING,
            cost_grand_total: DataTypes.STRING,
            cost_description: DataTypes.STRING,
            file: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'cost',
        }
    )
    return cost
}
