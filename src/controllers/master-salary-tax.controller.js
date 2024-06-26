const errorhandler = require('../helpers/errorhandler.helper')
const { master_tax } = require('../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'master_salary_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await master_tax.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            tax_name: {
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
                message: 'Get all master tax successfully',
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
            const data = await master_tax.create(req.body)
            return res.json({
                success: true,
                message: 'Create master tax successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await master_tax.findOne({
                where: {
                    master_salary_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get master tax successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await master_tax.update(req.body, {
                where: {
                    master_salary_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update master tax successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await master_tax.destroy({
                where: {
                    master_salary_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete master tax successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
