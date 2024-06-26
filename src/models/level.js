'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class level extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            level.hasMany(models.employee, {
                foreignKey: 'level_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    level.init(
        {
            level_code: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
            },
            level_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'level',
        }
    )
    return level
}
