'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class leave_type_master extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            leave_type_master.hasMany(models.leave_type, {
                foreignKey: 'leave_type_code',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    leave_type_master.init(
        {
            leave_type_code: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
            },
            leave_type_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'leave_type_master',
        }
    )
    return leave_type_master
}
