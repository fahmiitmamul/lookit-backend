'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class bpjs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    bpjs.init(
        {
            bpjs_type: DataTypes.STRING,
            bpjs_code: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'bpjs',
        }
    )
    return bpjs
}
