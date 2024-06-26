'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class overtime_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    overtime_type.init(
        {
            name: DataTypes.STRING,
            duration: DataTypes.STRING,
            overtime_type_count: DataTypes.STRING,
            nominal: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'overtime_type',
        }
    )
    return overtime_type
}
