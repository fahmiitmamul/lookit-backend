const errorhandler = require('../helpers/errorhandler.helper')
const { employee } = require('../models/index')
const { area } = require('../models/index')
const { branch } = require('../models/index')
const { division } = require('../models/index')
const { position_of_work } = require('../models/index')
const { level } = require('../models/index')
const { province } = require('../models/index')
const { districts } = require('../models/index')
const { regency } = require('../models/index')
const { village } = require('../models/index')
const { user } = require('../models/index')
const { presence } = require('../models/index')
const { Op } = require('sequelize')
const argon = require('argon2')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const offset = (page - 1) * limit
            const { count, rows } = await employee.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            nik_ktp: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_nik: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            npwp: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            birth_place: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            age: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            religion: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            gender: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            email: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            phone_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            marital_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_height: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_weight: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            blood_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            e_ktp_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            e_ktp_postal_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            domicile_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            domicile_postal_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            vaccine_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_full_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_phone_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_owner_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_brother: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_brother_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_applied_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_reason: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            join_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            account_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_branch_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            facebook: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            instagram: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            telegram: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            twitter: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            line: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            linkedin: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            tiktok: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'educations.educations': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'bpjs.bpjs': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'insurance.insurance': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'work_history.work_history': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$area.area_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$branch.branch_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$division.division_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$position.position_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$level.level_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_province.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_regency.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_district.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_village.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_province.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_regency.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_district.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_village.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: area,
                        as: 'area',
                    },
                    {
                        model: branch,
                        as: 'branch',
                    },
                    {
                        model: division,
                        as: 'division',
                    },
                    {
                        model: position_of_work,
                        as: 'position',
                    },
                    {
                        model: level,
                        as: 'level',
                    },
                    {
                        model: province,
                        as: 'e_ktp_province',
                    },
                    {
                        model: regency,
                        as: 'e_ktp_regency',
                    },
                    {
                        model: districts,
                        as: 'e_ktp_district',
                    },
                    {
                        model: village,
                        as: 'e_ktp_village',
                    },
                    {
                        model: province,
                        as: 'domicile_province',
                    },
                    {
                        model: regency,
                        as: 'domicile_regency',
                    },
                    {
                        model: districts,
                        as: 'domicile_district',
                    },
                    {
                        model: village,
                        as: 'domicile_village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all employee successfully',
                results: {
                    data: rows,
                    totalData: count,
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                    pageSize: limit,
                },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getActiveEmployee: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const offset = (page - 1) * limit
            const { count, rows } = await employee.findAndCountAll({
                where: {
                    isEmployeeActive: {
                        [Op.eq]: 1,
                    },
                    [Op.or]: [
                        {
                            name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            nik_ktp: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_nik: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            npwp: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            birth_place: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            age: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            religion: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            gender: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            email: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },

                        {
                            phone_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            marital_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_height: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_weight: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            blood_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            e_ktp_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            e_ktp_postal_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            domicile_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            domicile_postal_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            vaccine_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_full_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_phone_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_owner_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_brother: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_brother_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_applied_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_reason: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            join_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            account_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_branch_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            facebook: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            instagram: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            telegram: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            twitter: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            line: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            linkedin: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            tiktok: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'educations.educations': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'bpjs.bpjs': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'insurance.insurance': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'work_history.work_history': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'driver_license.driver_license': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$area.area_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$branch.branch_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$division.division_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$position.position_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$level.level_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_province.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_regency.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_district.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_village.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_province.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_regency.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_district.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_village.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: area,
                        as: 'area',
                    },
                    {
                        model: branch,
                        as: 'branch',
                    },
                    {
                        model: division,
                        as: 'division',
                    },
                    {
                        model: position_of_work,
                        as: 'position',
                    },
                    {
                        model: level,
                        as: 'level',
                    },
                    {
                        model: province,
                        as: 'e_ktp_province',
                    },
                    {
                        model: regency,
                        as: 'e_ktp_regency',
                    },
                    {
                        model: districts,
                        as: 'e_ktp_district',
                    },
                    {
                        model: village,
                        as: 'e_ktp_village',
                    },
                    {
                        model: province,
                        as: 'domicile_province',
                    },
                    {
                        model: regency,
                        as: 'domicile_regency',
                    },
                    {
                        model: districts,
                        as: 'domicile_district',
                    },
                    {
                        model: village,
                        as: 'domicile_village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all employee successfully',
                results: {
                    data: rows,
                    totalData: count,
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                    pageSize: limit,
                },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getNonActiveEmployee: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const offset = (page - 1) * limit
            const { count, rows } = await employee.findAndCountAll({
                where: {
                    isEmployeeActive: {
                        [Op.eq]: 0,
                    },
                    [Op.or]: [
                        {
                            name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            nik_ktp: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_nik: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            npwp: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            birth_place: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            age: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            religion: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            gender: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            email: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'educations.educations': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'bpjs.bpjs': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'insurance.insurance': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            'work_history.work_history': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            phone_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            marital_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_height: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_weight: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            blood_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            e_ktp_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            e_ktp_postal_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            domicile_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            domicile_postal_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            vaccine_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_full_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_phone_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_owner_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_brother: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            urgent_brother_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_applied_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            resign_reason: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            join_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            account_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            bank_branch_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            facebook: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            instagram: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            telegram: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            twitter: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            line: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            linkedin: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            tiktok: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },

                        {
                            '$area.area_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$branch.branch_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$division.division_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$position.position_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$level.level_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_province.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_regency.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_district.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$e_ktp_village.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_province.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_regency.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_district.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$domicile_village.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: area,
                        as: 'area',
                    },
                    {
                        model: branch,
                        as: 'branch',
                    },
                    {
                        model: division,
                        as: 'division',
                    },
                    {
                        model: position_of_work,
                        as: 'position',
                    },
                    {
                        model: level,
                        as: 'level',
                    },
                    {
                        model: province,
                        as: 'e_ktp_province',
                    },
                    {
                        model: regency,
                        as: 'e_ktp_regency',
                    },
                    {
                        model: districts,
                        as: 'e_ktp_district',
                    },
                    {
                        model: village,
                        as: 'e_ktp_village',
                    },
                    {
                        model: province,
                        as: 'domicile_province',
                    },
                    {
                        model: regency,
                        as: 'domicile_regency',
                    },
                    {
                        model: districts,
                        as: 'domicile_district',
                    },
                    {
                        model: village,
                        as: 'domicile_village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all employee successfully',
                results: {
                    data: rows,
                    totalData: count,
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                    pageSize: limit,
                },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getBranch: async (req, res) => {
        try {
            const employee_id = req.query.employee_id
            const employees = employee_id.split(',').map(Number)

            const data = await employee.findAll({
                where: {
                    branch_id: employees,
                },
            })

            return res.json({
                success: true,
                message: 'Get employee branch successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getPresence: async (req, res) => {
        try {
            const employeeList = req.body.employee
            const selectedEmployee = employeeList.split(',').map(Number)

            const data = await employee.findAll({
                include: [
                    {
                        model: presence,
                        as: 'presences',
                    },
                ],
                where: {
                    id: selectedEmployee,
                },
            })
            return res.json({
                success: true,
                message: 'Get employee presence successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            if (req.file) {
                req.body.profile_photo = req.file.filename
            }
            const data = await employee.create({
                ...req.body,
                educations: JSON.parse(req.body.educations),
                work_history: JSON.parse(req.body.work_history),
                bpjs: JSON.parse(req.body.bpjs),
                insurance: JSON.parse(req.body.insurance),
                driver_license: JSON.parse(req.body.driver_license),
            })

            const hashedPassword = await argon.hash(req.body.password)

            await user.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                role_id: '3',
                employee_id: data.id,
            })

            return res.json({
                success: true,
                message: 'Create employee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    bulkCreate: async (req, res) => {
        try {
            function transformData(inputData) {
                const transformedData = []

                inputData.forEach((originalData) => {
                    const transformedItem = {
                        profile_photo: 'uploads/v9yghfukw43gvjwwy4ub.jpg',
                        nik_ktp: originalData['Nomor Induk Kependudukan'],
                        employee_nik: originalData['Nomor Induk Karyawan'],
                        name: originalData['Nama Karyawan'],
                        area_id: originalData['Kode Area'],
                        branch_id: originalData['Kode Cabang'],
                        departement_id: originalData['Kode Divisi'],
                        position_id: originalData['Kode Jabatan'],
                        level_id: originalData['Kode Level'],
                        educations: {
                            educations: [
                                {
                                    school_name: '',
                                    school_level: '',
                                    education_start_date: '',
                                    education_end_date: '',
                                },
                            ],
                        },
                        work_history: {
                            work_history: [
                                {
                                    company_name: '',
                                    position_name: '',
                                    work_history_start_date: '',
                                    work_history_end_date: '',
                                },
                            ],
                        },
                        bpjs: {
                            bpjs: [{ bpjs_name: '', bpjs_number: '' }],
                        },
                        insurance: {
                            insurance: [
                                { insurance_name: '', insurance_number: '' },
                            ],
                        },
                        e_ktp_province_id: 11,
                        e_ktp_regency_id: 1101,
                        e_ktp_district_id: 1101010,
                        e_ktp_village_id: 1,
                        domicile_province_id: 11,
                        domicile_regency_id: 1101,
                        domicile_district_id: 1101010,
                        domicile_village_id: 1,
                        employee_status:
                            originalData[
                                'Status Karyawan (Magang/Probation/Kontrak/Tetap)'
                            ],
                        join_date: originalData['Join Date (DD/MM/YYYY)'],
                        end_date: originalData['End Date (DD/MM/YYYY)'],
                        gender: originalData[
                            'Jenis Kelamin (Laki-Laki/Perempuan)'
                        ],
                        birth_place: originalData['Tempat Tanggal Lahir'],
                        domicile_full_address:
                            originalData['Alamat Lengkap Sesuai Domisili'],
                        e_ktp_full_address:
                            originalData['Alamat Lengkap Sesuai E-KTP'],
                        religion: originalData['Agama'],
                        email: originalData['Email'],
                        phone_number: originalData['Handphone'],
                        isEmployeeActive: 1,
                    }

                    transformedData.push(transformedItem)
                })

                return transformedData
            }

            const employeeData = transformData(req.body)

            const transformUserData = async (inputData) => {
                const transformedData = await Promise.all(
                    inputData.map(async (originalData) => {
                        const transformedItem = {
                            name: originalData['Nama Karyawan'],
                            email: originalData['Email'],
                            password: await argon.hash(
                                originalData['Password'].toString()
                            ),
                            role_id: 3,
                        }
                        return transformedItem
                    })
                )

                return transformedData
            }

            const userData = await transformUserData(req.body)

            const data = await employee.bulkCreate(employeeData)

            const users = await user.bulkCreate(userData)

            return res.json({
                success: true,
                message: 'Create employees successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await employee.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: area,
                        as: 'area',
                    },
                    {
                        model: branch,
                        as: 'branch',
                    },
                    {
                        model: division,
                        as: 'division',
                    },
                    {
                        model: position_of_work,
                        as: 'position',
                    },
                    {
                        model: level,
                        as: 'level',
                    },
                    {
                        model: province,
                        as: 'e_ktp_province',
                    },
                    {
                        model: regency,
                        as: 'e_ktp_regency',
                    },
                    {
                        model: districts,
                        as: 'e_ktp_district',
                    },
                    {
                        model: village,
                        as: 'e_ktp_village',
                    },
                    {
                        model: province,
                        as: 'domicile_province',
                    },
                    {
                        model: regency,
                        as: 'domicile_regency',
                    },
                    {
                        model: districts,
                        as: 'domicile_district',
                    },
                    {
                        model: village,
                        as: 'domicile_village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get employee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneByNik: async (req, res) => {
        try {
            const data = await employee.findOne({
                where: {
                    employee_nik: {
                        [Op.like]: req.params.id,
                    },
                },
                include: [
                    {
                        model: area,
                        as: 'area',
                    },
                    {
                        model: branch,
                        as: 'branch',
                    },
                    {
                        model: division,
                        as: 'division',
                    },
                    {
                        model: position_of_work,
                        as: 'position',
                    },
                    {
                        model: level,
                        as: 'level',
                    },
                    {
                        model: province,
                        as: 'e_ktp_province',
                    },
                    {
                        model: regency,
                        as: 'e_ktp_regency',
                    },
                    {
                        model: districts,
                        as: 'e_ktp_district',
                    },
                    {
                        model: village,
                        as: 'e_ktp_village',
                    },
                    {
                        model: province,
                        as: 'domicile_province',
                    },
                    {
                        model: regency,
                        as: 'domicile_regency',
                    },
                    {
                        model: districts,
                        as: 'domicile_district',
                    },
                    {
                        model: village,
                        as: 'domicile_village',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get employee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.profile_photo = req.file.filename
            }

            const data = await employee.update(
                {
                    ...req.body,
                    educations: JSON.parse(req.body.educations),
                    work_history: JSON.parse(req.body.work_history),
                    bpjs: JSON.parse(req.body.bpjs),
                    insurance: JSON.parse(req.body.insurance),
                    driver_license: JSON.parse(req.body.driver_license),
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )

            const hashedPassword = await argon.hash(req.body.password)

            if (req.body.password) {
                const data = await user.update(
                    {
                        password: hashedPassword,
                    },
                    {
                        where: {
                            employee_id: req.params.id,
                        },
                    }
                )
            }

            return res.json({
                success: true,
                message: 'Update employee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    updateLeaveType: async (req, res) => {
        try {
            const leave_type = parseInt(req.body.leave_type)
            const data = await employee.update(
                { leave_type: leave_type },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            return res.json({
                success: true,
                message: 'Update employee leave type successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await employee.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete employee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
