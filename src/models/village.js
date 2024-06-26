'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class village extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    village.init(
        {
            district_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'village',
        }
    )
    return village
}
