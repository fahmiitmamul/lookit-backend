'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class presence extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            presence.belongsTo(models.presence_status, {
                foreignKey: 'presence_status_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            presence.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            })

            presence.belongsTo(models.shift, {
                foreignKey: 'shift_id',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            })
        }
    }
    presence.init(
        {
            employee_id: DataTypes.INTEGER,
            start_time: DataTypes.STRING,
            end_time: DataTypes.STRING,
            total_time: DataTypes.STRING,
            shift_id: DataTypes.INTEGER,
            start: DataTypes.DATE,
            end: DataTypes.DATE,
            presence_status_id: DataTypes.INTEGER,
            file_in: DataTypes.STRING,
            file_out: DataTypes.STRING,
            change_reason: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'presence',
        }
    )
    return presence
}
