const errorhandler = require('../helpers/errorhandler.helper')
const { master_salary } = require('../models/index')

module.exports = {
    getTambahan: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'master_salary_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await master_salary.findAndCountAll({
                where: {
                    master_salary_type: '1',
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all master salary successfully',
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
    getPotongan: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'master_salary_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await master_salary.findAndCountAll({
                where: {
                    master_salary_type: '2',
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all master salary successfully',
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
            const data = await master_salary.create(req.body)
            return res.json({
                success: true,
                message: 'Create master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await master_salary.findOne({
                where: {
                    master_salary_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await master_salary.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await master_salary.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
