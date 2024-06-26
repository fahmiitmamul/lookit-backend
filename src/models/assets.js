'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class assets extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    assets.init(
        {
            picture: DataTypes.STRING,
            asset_name: DataTypes.STRING,
            asset_brand: DataTypes.STRING,
            asset_type: DataTypes.STRING,
            asset_color: DataTypes.STRING,
            asset_code: DataTypes.STRING,
            asset_quantity: DataTypes.STRING,
            asset_condition: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'assets',
        }
    )
    return assets
}
