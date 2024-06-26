'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class leave_type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            leave_type.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            leave_type.belongsTo(models.leave_type_master, {
                foreignKey: 'leave_type_id',
                targetKey: 'leave_type_code',
                as: 'leave_type_master',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    leave_type.init(
        {
            employee_id: DataTypes.INTEGER,
            leave_type_id: DataTypes.INTEGER,
            leave_type: DataTypes.STRING,
            used_leave_type: DataTypes.STRING,
            remaining_leave_type: DataTypes.STRING,
            initial_estimate: DataTypes.STRING,
            final_estimate: DataTypes.STRING,
            leave_type_description: DataTypes.STRING,
            leave_type_code: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'leave_type',
        }
    )
    return leave_type
}
