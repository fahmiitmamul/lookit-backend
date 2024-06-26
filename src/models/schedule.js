'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            schedule.belongsTo(models.shift, {
                foreignKey: 'shift_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            schedule.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    schedule.init(
        {
            title: DataTypes.STRING,
            start: DataTypes.STRING,
            end: DataTypes.STRING,
            start_time: DataTypes.STRING,
            end_time: DataTypes.STRING,
            is_holiday: DataTypes.BOOLEAN,
            shift_id: DataTypes.INTEGER,
            employee_id: DataTypes.INTEGER,
            is_reguler: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'schedule',
        }
    )
    return schedule
}
