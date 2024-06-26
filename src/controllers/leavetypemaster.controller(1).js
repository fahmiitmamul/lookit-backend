const errorhandler = require('../helpers/errorhandler.helper')
const { leave_type_master } = require('../models/index')
const { Op, literal } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'leave_type_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await leave_type_master.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            leave_type_code: literal(
                                `CAST(leave_type_code AS TEXT) = '${search}'`
                            ),
                        },
                        {
                            leave_type_name: {
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
            const data = await leave_type_master.create(req.body)
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
            const data = await leave_type_master.findOne({
                where: {
                    leave_type_code: req.params.id,
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
            const data = await leave_type_master.update(req.body, {
                where: {
                    leave_type_code: req.params.id,
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
            const data = await leave_type_master.destroy({
                where: {
                    leave_type_code: req.params.id,
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
