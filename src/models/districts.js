'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class districts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            districts.hasMany(models.village, {
                foreignKey: 'district_id',
                as: 'village',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            districts.hasMany(models.employee, {
                foreignKey: 'district_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    districts.init(
        {
            regency_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'districts',
        }
    )
    return districts
}
