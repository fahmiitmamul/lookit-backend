'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class outgoing_assets extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            outgoing_assets.belongsTo(models.employee, {
                foreignKey: 'employee_id',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })

            outgoing_assets.belongsTo(models.assets, {
                foreignKey: 'asset_id',
                as: 'assets',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                hooks: true,
            })
        }
    }
    outgoing_assets.init(
        {
            employee_id: DataTypes.INTEGER,
            file: DataTypes.STRING,
            asset_id: DataTypes.INTEGER,
            out_date: DataTypes.STRING,
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
            modelName: 'outgoing_assets',
        }
    )
    return outgoing_assets
}
