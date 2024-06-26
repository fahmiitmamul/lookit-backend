'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class master_tax extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    master_tax.init(
        {
            master_salary_code: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            tax_name: { type: DataTypes.STRING, unique: true },
        },
        {
            sequelize,
            modelName: 'master_tax',
        }
    )
    return master_tax
}
