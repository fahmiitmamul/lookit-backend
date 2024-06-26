'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class shift extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            shift.hasMany(models.schedule, {
                foreignKey: 'shift_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    shift.init(
        {
            shift_name: { type: DataTypes.STRING, unique: true },
            shift_code: { type: DataTypes.STRING, unique: true },
            start_time: DataTypes.STRING,
            end_time: DataTypes.STRING,
            minimal_start_time: DataTypes.STRING,
            minimal_end_time: DataTypes.STRING,
            maximal_start_time: DataTypes.STRING,
            maximal_end_time: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'shift',
        }
    )
    return shift
}
