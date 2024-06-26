const errorhandler = require('../helpers/errorhandler.helper')
const { branch } = require('../models/index')
const { company } = require('../models/index')
const { employee } = require('../models/index')
const { Op, literal } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'branch_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await branch.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            branch_code: literal(
                                `CAST(branch_code AS TEXT) = '${search}'`
                            ),
                        },
                        {
                            branch_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            latitude: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            longitude: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            maps: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            full_address: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            radius: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.company_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.brand_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.business_type$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.email$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.company_phone_number$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.latitude$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.longitude$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.maps$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.radius$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$company.full_address$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: company,
                        as: 'company',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all branch successfully',
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
    create: async (req, res) => {
        try {
            const data = await branch.create(req.body)
            return res.json({
                success: true,
                message: 'Create branch successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getEmployeeBranch: async (req, res) => {
        try {
            const data = await branch.findOne({
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        where: { id: req.params.id },
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get branch successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await branch.findOne({
                where: {
                    branch_code: req.params.id,
                },
                include: [
                    {
                        model: company,
                        as: 'company',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get branch successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await branch.update(req.body, {
                where: {
                    branch_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update branch successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await branch.destroy({
                where: {
                    branch_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete branch successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
