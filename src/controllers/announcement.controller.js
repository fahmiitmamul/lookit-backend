const errorhandler = require('../helpers/errorhandler.helper')
const { announcement, employee } = require('../models/index')
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
            const { count, rows } = await announcement.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            announcement_title: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            announcement_content: {
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
                message: 'Get all announcement successfully',
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
            if (req.file) {
                req.body.file = req.file.filename
            }

            const employee = req.body.employee_id
            const employeeData = employee.split(',').map(Number)

            const data = await announcement.create(req.body)

            await data.addEmployee(employeeData)

            return res.json({
                success: true,
                message: 'Create announcement successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getUnread: async (req, res) => {
        try {
            const data = await announcement.findOne({
                where: {
                    is_read: false,
                },
            })
            return res.json({
                success: true,
                message: 'Get announcement successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await announcement.findOne({
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
                message: 'Get announcement successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.file = req.file.filename
            }

            const data = await announcement.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })

            return res.json({
                success: true,
                message: 'Update announcement successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await announcement.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete announcement successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
