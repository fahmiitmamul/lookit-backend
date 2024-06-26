'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class incoming_assets extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            incoming_assets.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            incoming_assets.belongsTo(models.outgoing_assets, {
                foreignKey: 'outgoing_asset_id',
                as: 'outgoing_assets',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    incoming_assets.init(
        {
            employee_id: DataTypes.INTEGER,
            file: DataTypes.STRING,
            outgoing_asset_id: DataTypes.INTEGER,
            start_date: DataTypes.STRING,
            picture: DataTypes.STRING,
            asset_name: DataTypes.STRING,
            asset_brand: DataTypes.STRING,
            asset_type: DataTypes.STRING,
            asset_color: DataTypes.STRING,
            asset_code: DataTypes.STRING,
            asset_condition: DataTypes.STRING,
            asset_quantity: DataTypes.STRING,
            asset_description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'incoming_assets',
        }
    )
    return incoming_assets
}
