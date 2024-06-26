const errorhandler = require('../helpers/errorhandler.helper')
const { events } = require('../models/index')
const { employee } = require('../models/index')
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
            const { count, rows } = await events.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            title: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            description: {
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
                        model: employee,
                        as: 'employees',
                        attributes: ['id', 'name'],
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all events successfully',
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
            const employee = req.body.employee
            const employeeData = employee.split(',').map(Number)

            const data = await events.create(req.body)

            await data.addEmployee(employeeData)

            return res.json({
                success: true,
                message: 'Create events successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await events.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: employee,
                        as: 'employees',
                        attributes: ['id', 'name'],
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get events successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await events.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update events successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await events.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete events successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
