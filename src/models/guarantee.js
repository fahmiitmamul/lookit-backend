'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class guarantee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    guarantee.init(
        {
            guarantee_name: DataTypes.STRING,
            guarantee_type: DataTypes.STRING,
            file: DataTypes.STRING,
            guarantee_description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'guarantee',
        }
    )
    return guarantee
}
