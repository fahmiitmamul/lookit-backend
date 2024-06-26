'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class branch extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            branch.belongsTo(models.company, {
                foreignKey: 'company_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            branch.hasOne(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    branch.init(
        {
            branch_code: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
            },
            branch_name: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            maps: DataTypes.STRING,
            radius: DataTypes.STRING,
            full_address: DataTypes.STRING,
            company_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'branch',
        }
    )
    return branch
}
