'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class presence_status extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            presence_status.hasMany(models.presence, {
                foreignKey: 'presence_status_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    presence_status.init(
        {
            name: DataTypes.STRING,
            presence_status_code: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'presence_status',
        }
    )
    return presence_status
}
