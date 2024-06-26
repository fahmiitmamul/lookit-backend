'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class regency extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            regency.hasMany(models.districts, {
                foreignKey: 'regency_id',
                as: 'districts',
            })

            regency.hasMany(models.employee, {
                foreignKey: 'regency_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    regency.init(
        {
            province_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'regency',
        }
    )
    return regency
}
