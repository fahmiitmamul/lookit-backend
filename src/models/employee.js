'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class employee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            employee.belongsTo(models.area, {
                foreignKey: 'area_id',
                targetKey: 'area_code',
                as: 'area',
            })

            employee.belongsTo(models.branch, {
                foreignKey: 'branch_id',
                targetKey: 'branch_code',
                as: 'branch',
            })

            employee.belongsTo(models.division, {
                foreignKey: 'departement_id',
                targetKey: 'division_code',
                as: 'division',
            })

            employee.belongsTo(models.position_of_work, {
                foreignKey: 'position_id',
                targetKey: 'position_code',
                as: 'position',
            })

            employee.belongsTo(models.level, {
                foreignKey: 'level_id',
                targetKey: 'level_code',
                as: 'level',
            })

            employee.belongsTo(models.province, {
                foreignKey: 'e_ktp_province_id',
                as: 'e_ktp_province',
            })

            employee.belongsTo(models.regency, {
                foreignKey: 'e_ktp_regency_id',
                as: 'e_ktp_regency',
            })

            employee.belongsTo(models.districts, {
                foreignKey: 'e_ktp_district_id',
                as: 'e_ktp_district',
            })

            employee.belongsTo(models.village, {
                foreignKey: 'e_ktp_village_id',
                as: 'e_ktp_village',
            })

            employee.belongsTo(models.province, {
                foreignKey: 'domicile_province_id',
                as: 'domicile_province',
            })

            employee.belongsTo(models.regency, {
                foreignKey: 'domicile_regency_id',
                as: 'domicile_regency',
            })

            employee.belongsTo(models.districts, {
                foreignKey: 'domicile_district_id',
                as: 'domicile_district',
            })

            employee.belongsTo(models.village, {
                foreignKey: 'domicile_village_id',
                as: 'domicile_village',
            })

            employee.belongsToMany(models.events, {
                through: 'EmployeeEvent',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.belongsToMany(models.announcement, {
                through: 'EmployeeAnnouncement',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.schedule, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.activity, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.contract, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.document, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.incoming_assets, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.incoming_guarantee, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.kpi, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.leave_type, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.outgoing_assets, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.outgoing_guarantee, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.request, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.schedule, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.tasks, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.tickets, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.user, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.chat, {
                foreignKey: 'sender_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })

            employee.hasMany(models.loan, {
                foreignKey: 'employee_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        }
    }
    employee.init(
        {
            profile_photo: DataTypes.STRING,
            name: DataTypes.STRING,
            nik_ktp: { type: DataTypes.STRING, unique: true },
            employee_nik: { type: DataTypes.STRING, unique: true },
            npwp: { type: DataTypes.STRING, unique: true },
            birth_place: DataTypes.STRING,
            age: DataTypes.STRING,
            religion: DataTypes.STRING,
            gender: DataTypes.STRING,
            email: { type: DataTypes.STRING, unique: true },
            batch: DataTypes.STRING,
            bank_owner_name: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            marital_status: DataTypes.STRING,
            employee_height: DataTypes.STRING,
            employee_weight: DataTypes.STRING,
            blood_type: DataTypes.STRING,
            e_ktp_province_id: DataTypes.INTEGER,
            e_ktp_regency_id: DataTypes.INTEGER,
            e_ktp_district_id: DataTypes.INTEGER,
            e_ktp_village_id: DataTypes.INTEGER,
            e_ktp_full_address: DataTypes.STRING,
            e_ktp_postal_code: DataTypes.STRING,
            domicile_province_id: DataTypes.INTEGER,
            domicile_regency_id: DataTypes.INTEGER,
            domicile_district_id: DataTypes.INTEGER,
            domicile_village_id: DataTypes.INTEGER,
            domicile_full_address: DataTypes.STRING,
            domicile_postal_code: DataTypes.STRING,
            vaccine_status: DataTypes.STRING,
            urgent_full_name: DataTypes.STRING,
            urgent_phone_number: DataTypes.STRING,
            urgent_full_address: DataTypes.STRING,
            area_id: DataTypes.INTEGER,
            branch_id: DataTypes.INTEGER,
            departement_id: DataTypes.INTEGER,
            position_id: DataTypes.INTEGER,
            level_id: DataTypes.INTEGER,
            employee_status: DataTypes.STRING,
            educations: DataTypes.JSONB,
            work_history: DataTypes.JSONB,
            urgent_brother: DataTypes.STRING,
            urgent_brother_number: DataTypes.STRING,
            bpjs: DataTypes.JSONB,
            insurance: DataTypes.JSONB,
            join_date: DataTypes.STRING,
            end_date: DataTypes.STRING,
            bank_name: DataTypes.STRING,
            account_number: DataTypes.STRING,
            bank_branch_name: DataTypes.STRING,
            driver_license: DataTypes.JSONB,
            resign_date: DataTypes.STRING,
            resign_applied_date: DataTypes.STRING,
            resign_reason: DataTypes.STRING,
            facebook: DataTypes.STRING,
            instagram: DataTypes.STRING,
            telegram: DataTypes.STRING,
            twitter: DataTypes.STRING,
            line: DataTypes.STRING,
            linkedin: DataTypes.STRING,
            tiktok: DataTypes.STRING,
            isEmployeeActive: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'employee',
        }
    )
    return employee
}
