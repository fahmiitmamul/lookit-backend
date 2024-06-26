'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class chat extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            chat.belongsTo(models.employee, {
                foreignKey: 'sender_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    chat.init(
        {
            message: DataTypes.TEXT,
            sender_id: DataTypes.INTEGER,
            receiver_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'chat',
        }
    )
    return chat
}
