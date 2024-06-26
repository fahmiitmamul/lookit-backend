const errorhandler = require('../helpers/errorhandler.helper')
const { level } = require('../models/index')
const { Op, literal } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'level_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await level.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            level_code: literal(
                                `CAST(level_code AS TEXT) = '${search}'`
                            ),
                        },
                        {
                            level_name: {
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
                message: 'Get all level successfully',
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
            const data = await level.create(req.body)
            return res.json({
                success: true,
                message: 'Create level successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await level.findOne({
                where: {
                    level_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get level successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await level.update(req.body, {
                where: {
                    level_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update level successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await level.destroy({
                where: {
                    level_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete level successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
