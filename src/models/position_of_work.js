'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class position_of_work extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            position_of_work.hasMany(models.employee, {
                foreignKey: 'position_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    position_of_work.init(
        {
            position_code: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
            },
            position_name: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'position_of_work',
        }
    )
    return position_of_work
}
