'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class province extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            province.hasMany(models.regency, {
                foreignKey: 'province_id',
                as: 'regency',
            })

            province.hasMany(models.employee, {
                foreignKey: 'province_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    province.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'province',
        }
    )
    return province
}
