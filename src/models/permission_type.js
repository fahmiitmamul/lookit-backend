'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class permission_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    permission_type.init(
        {
            permission_code: DataTypes.INTEGER,
            permission_name: DataTypes.STRING,
            permission_count: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'permission_type',
        }
    )
    return permission_type
}
