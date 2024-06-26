'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class announcement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            announcement.belongsToMany(models.employee, {
                through: 'EmployeeAnnouncement',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    announcement.init(
        {
            announcement_title: DataTypes.STRING,
            announcement_start_date: DataTypes.DATE,
            announcement_expiration_date: DataTypes.DATE,
            announcement_content: DataTypes.TEXT,
            is_published: DataTypes.BOOLEAN,
            is_read: DataTypes.BOOLEAN,
            file: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'announcement',
        }
    )
    return announcement
}
