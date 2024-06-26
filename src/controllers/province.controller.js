const errorhandler = require('../helpers/errorhandler.helper')
const { province } = require('../models/index')
const { regency } = require('../models/index')
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
            const { count, rows } = await province.findAndCountAll({
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: {
                    model: regency,
                    as: 'regency',
                },
            })
            return res.json({
                success: true,
                message: 'Get all province successfully',
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
            const data = await province.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get province successfully',
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
            const data = await province.create(req.body)
            return res.json({
                success: true,
                message: 'Create province successfully',
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
            const data = await province.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update province successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await province.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete province successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
