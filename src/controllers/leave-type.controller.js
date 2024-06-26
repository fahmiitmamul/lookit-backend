const errorhandler = require('../helpers/errorhandler.helper')
const { leave_type } = require('../models/index')
const { leave_type_master } = require('../models/index')
const { employee } = require('../models/index')
const { branch } = require('../models/index')
const { position_of_work } = require('../models/index')
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
            const { count, rows } = await leave_type.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            initial_estimate: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            final_estimate: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            leave_type_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            used_leave_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            remaining_leave_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            leave_type: {
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
                            '$employee.employee_status$': {
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
                    {
                        model: leave_type_master,
                        as: 'leave_type_master',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all leave type successfully',
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
            const data = await leave_type.create(req.body)
            return res.json({
                success: true,
                message: 'Create leave type successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await leave_type.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get leave type successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await leave_type.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update leave type successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await leave_type.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete leave type successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
