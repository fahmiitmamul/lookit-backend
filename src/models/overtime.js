'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class overtime extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            overtime.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            overtime.belongsTo(models.overtime_type, {
                foreignKey: 'overtime_type_id',
                as: 'overtime_type',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    overtime.init(
        {
            employee_id: DataTypes.INTEGER,
            employee_nik: DataTypes.STRING,
            start_date: DataTypes.DATE,
            end_date: DataTypes.DATE,
            overtime_type_id: DataTypes.INTEGER,
            total_time: DataTypes.STRING,
            file: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            status: DataTypes.STRING,
            status_id: DataTypes.INTEGER,
            isApproved: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'overtime',
        }
    )
    return overtime
}
