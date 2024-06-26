'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class events extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            events.belongsToMany(models.employee, {
                through: 'EmployeeEvent',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    events.init(
        {
            title: DataTypes.STRING,
            categories: DataTypes.STRING,
            description: DataTypes.TEXT,
            start_time: DataTypes.STRING,
            end_time: DataTypes.STRING,
            start: DataTypes.STRING,
            end: DataTypes.STRING,
            allDay: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'events',
        }
    )
    return events
}
