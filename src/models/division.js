'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class division extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            division.hasMany(models.employee, {
                foreignKey: 'departement_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    division.init(
        {
            division_code: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
            },
            division_name: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'division',
        }
    )
    return division
}
