'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class insurance_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    insurance_type.init(
        {
            insurance_code: DataTypes.STRING,
            insurance_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'insurance_type',
        }
    )
    return insurance_type
}
