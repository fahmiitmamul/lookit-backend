'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class area extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            area.hasMany(models.employee, {
                foreignKey: 'area_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    area.init(
        {
            area_code: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
            },
            area_name: DataTypes.STRING,
            area_description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'area',
        }
    )
    return area
}
