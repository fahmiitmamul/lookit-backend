'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class vaccine_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    vaccine_status.init(
        {
            vaccine_code: DataTypes.STRING,
            vaccine_status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'vaccine_status',
        }
    )
    return vaccine_status
}
