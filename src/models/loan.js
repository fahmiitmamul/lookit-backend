'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class loan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            loan.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    loan.init(
        {
            employee_id: DataTypes.INTEGER,
            type_of_loan: DataTypes.STRING,
            loan_amount: DataTypes.STRING,
            installment_amount: DataTypes.STRING,
            status: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'loan',
        }
    )
    return loan
}
