'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class permission_name extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    permission_name.init(
        {
            permission_name: { type: DataTypes.STRING, unique: true },
            permissions: DataTypes.JSONB,
        },
        {
            sequelize,
            modelName: 'permission_name',
        }
    )
    return permission_name
}
