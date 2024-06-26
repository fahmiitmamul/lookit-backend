'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class activity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            activity.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    activity.init(
        {
            employee_id: DataTypes.INTEGER,
            activity_date: DataTypes.STRING,
            activity_name: DataTypes.STRING,
            activity_description: DataTypes.STRING,
            file: DataTypes.STRING,
            status: DataTypes.STRING,
            comment: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'activity',
        }
    )
    return activity
}
