'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class tickets extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            tickets.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })

            tickets.belongsTo(models.employee, {
                foreignKey: 'action_employee_id',
                as: 'employee_action',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })
        }
    }
    tickets.init(
        {
            employee_id: DataTypes.INTEGER,
            date: DataTypes.STRING,
            ticket_code: DataTypes.STRING,
            ticket_title: DataTypes.STRING,
            ticket_description: DataTypes.TEXT,
            ticket_priority: DataTypes.INTEGER,
            ticket_status: DataTypes.STRING,
            action: DataTypes.STRING,
            action_employee_id: DataTypes.INTEGER,
            completion_date: DataTypes.STRING,
            file_action: DataTypes.STRING,
            action_description: DataTypes.STRING,
            file: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'tickets',
        }
    )
    return tickets
}
