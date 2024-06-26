'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class tasks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            tasks.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })
        }
    }
    tasks.init(
        {
            employee_id: DataTypes.INTEGER,
            task_name: DataTypes.STRING,
            task_start_date: DataTypes.STRING,
            task_end_date: DataTypes.STRING,
            task_priority: DataTypes.STRING,
            task_description: DataTypes.STRING,
            file: DataTypes.JSONB,
            task_status: DataTypes.INTEGER,
            proof_of_assignment: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'tasks',
        }
    )
    return tasks
}
