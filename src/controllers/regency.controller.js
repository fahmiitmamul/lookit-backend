const errorhandler = require('../helpers/errorhandler.helper')
const { regency } = require('../models/index')
const { districts } = require('../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 100000
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await regency.findAndCountAll({
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: {
                    model: districts,
                    as: 'districts',
                },
            })
            return res.json({
                success: true,
                message: 'Get all regency successfully',
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
    findOneById: async (req, res) => {
        try {
            const data = await regency.findAll({
                where: {
                    province_id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get regency successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            if (req.file) {
                req.body.picture = req.file.filename
            }
            const data = await regency.create(req.body)
            return res.json({
                success: true,
                message: 'Create regency successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.picture = req.file.filename
            }
            const data = await regency.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update regency successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await regency.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete regency successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
