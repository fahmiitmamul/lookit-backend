const errorhandler = require('../helpers/errorhandler.helper')
const { kpi } = require('../models/index')
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
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await kpi.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            kpi_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$employee.position.position_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$employee.branch.branch_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                },
                order: [
                    [{ model: employee, as: 'employee' }, sortBy, sortOrder],
                ],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        include: [
                            {
                                model: branch,
                                as: 'branch',
                            },
                            {
                                model: position_of_work,
                                as: 'position',
                            },
                        ],
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all kpi successfully',
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
            const data = await kpi.create({
                ...req.body,
                indicators: JSON.parse(req.body.indicators),
            })

            return res.json({
                success: true,
                message: 'Create kpi successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await kpi.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        include: [
                            {
                                model: branch,
                                as: 'branch',
                            },
                            {
                                model: position_of_work,
                                as: 'position',
                            },
                        ],
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get kpi successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await kpi.update(
                { ...req.body, indicators: JSON.parse(req.body.indicators) },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            return res.json({
                success: true,
                message: 'Update kpi successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await kpi.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete kpi successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
