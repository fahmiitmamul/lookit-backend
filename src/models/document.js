'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class document extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            document.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })
        }
    }
    document.init(
        {
            employee_id: DataTypes.INTEGER,
            document_name: DataTypes.STRING,
            document_type: DataTypes.STRING,
            document_description: DataTypes.STRING,
            file: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'document',
        }
    )
    return document
}
