const errorhandler = require('../helpers/errorhandler.helper')
const { area } = require('../models/index')
const { Op, literal } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'area_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await area.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            area_code: literal(
                                `CAST(area_code AS TEXT) = '${search}'`
                            ),
                        },
                        {
                            area_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            area_description: {
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
                message: 'Get all area successfully',
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
            const data = await area.create(req.body)
            return res.json({
                success: true,
                message: 'Create area successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await area.findOne({
                where: {
                    area_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get area successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await area.update(req.body, {
                where: {
                    area_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update area successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await area.destroy({
                where: {
                    area_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete area successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
