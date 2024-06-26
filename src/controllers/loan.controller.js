const errorhandler = require('../helpers/errorhandler.helper')
const { loan } = require('../models/index')

module.exports = {
    getAll: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'loan_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await loan.findAndCountAll({
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all loan successfully',
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
            const data = await loan.create(req.body)
            return res.json({
                success: true,
                message: 'Create loan successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await loan.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get loan successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await loan.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update loan successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await loan.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete loan successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
