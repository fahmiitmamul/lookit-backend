'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class contract extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            contract.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    contract.init(
        {
            employee_id: DataTypes.INTEGER,
            start_date: DataTypes.STRING,
            end_date: DataTypes.STRING,
            contract_name: DataTypes.STRING,
            contract_description: DataTypes.STRING,
            status: DataTypes.STRING,
            submission_id: DataTypes.INTEGER,
            template_id: DataTypes.INTEGER,
            file: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'contract',
        }
    )
    return contract
}
