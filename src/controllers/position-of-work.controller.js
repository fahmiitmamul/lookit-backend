const errorhandler = require('../helpers/errorhandler.helper')
const { position_of_work, employee } = require('../models/index')
const { Op, literal } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'position_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await position_of_work.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            position_code: literal(
                                `CAST(position_code AS TEXT) = '${search}'`
                            ),
                        },
                        {
                            position_name: {
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
            })
            return res.json({
                success: true,
                message: 'Get all position of work successfully',
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
            const data = await position_of_work.create(req.body)
            return res.json({
                success: true,
                message: 'Create position of work successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getEmployee: async (req, res) => {
        try {
            const employee = req.query.employee_id
            const employeeId = employee.split(',').map(Number)
            const data = await position_of_work.findOne({
                where: {
                    position_code: req.params.id,
                },
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        where: { id: employeeId },
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get position of work successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await position_of_work.findOne({
                where: {
                    position_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get position of work successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await position_of_work.update(req.body, {
                where: {
                    position_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update position of work successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await position_of_work.destroy({
                where: {
                    position_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete position of work successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
