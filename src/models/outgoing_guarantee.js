'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class outgoing_guarantee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            outgoing_guarantee.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })

            outgoing_guarantee.belongsTo(models.guarantee, {
                foreignKey: 'guarantee_id',
                as: 'guarantee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })
        }
    }
    outgoing_guarantee.init(
        {
            employee_id: DataTypes.INTEGER,
            end_date: DataTypes.STRING,
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
            modelName: 'outgoing_guarantee',
        }
    )
    return outgoing_guarantee
}
