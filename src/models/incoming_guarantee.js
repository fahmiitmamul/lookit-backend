'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class incoming_guarantee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            incoming_guarantee.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            incoming_guarantee.belongsTo(models.guarantee, {
                foreignKey: 'guarantee_id',
                as: 'guarantee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    incoming_guarantee.init(
        {
            employee_id: DataTypes.INTEGER,
            start_date: DataTypes.STRING,
            guarantee_id: DataTypes.INTEGER,
            guarantee_name: DataTypes.STRING,
            guarantee_type: DataTypes.STRING,
            recepient_name: DataTypes.STRING,
            guarantee_condition: DataTypes.STRING,
            file: DataTypes.STRING,
            guarantee_description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'incoming_guarantee',
        }
    )
    return incoming_guarantee
}
