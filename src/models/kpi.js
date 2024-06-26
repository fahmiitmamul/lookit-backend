'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class kpi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            kpi.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })
        }
    }
    kpi.init(
        {
            employee_id: DataTypes.INTEGER,
            indicators: DataTypes.JSONB,
            kpi_description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'kpi',
        }
    )
    return kpi
}
