'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            company.hasOne(models.branch, {
                foreignKey: 'company_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    company.init(
        {
            logo: DataTypes.STRING,
            company_name: DataTypes.STRING,
            brand_name: DataTypes.STRING,
            business_type: DataTypes.STRING,
            email: DataTypes.STRING,
            company_phone_number: DataTypes.STRING,
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            maps: DataTypes.STRING,
            radius: DataTypes.STRING,
            full_address: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'company',
        }
    )
    return company
}
