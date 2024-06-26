'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class mutation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mutation.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })

            mutation.belongsTo(models.position_of_work, {
                foreignKey: 'last_position_id',
                targetKey: 'position_code',
                as: 'last_position',
            })

            mutation.belongsTo(models.area, {
                foreignKey: 'last_area_id',
                targetKey: 'area_code',
                as: 'last_area',
            })
        }
    }
    mutation.init(
        {
            employee_id: DataTypes.INTEGER,
            status_id: DataTypes.INTEGER,
            last_position_id: DataTypes.INTEGER,
            last_area_id: DataTypes.INTEGER,
            date_created: DataTypes.STRING,
            date_applied: DataTypes.STRING,
            mutation_description: DataTypes.STRING,
            file: DataTypes.STRING,
            mutation_type: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'mutation',
        }
    )
    return mutation
}
