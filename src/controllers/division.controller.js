const errorhandler = require('../helpers/errorhandler.helper')
const { division } = require('../models/index')
const { Op, literal } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'division_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await division.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            division_code: literal(
                                `CAST(division_code AS TEXT) = '${search}'`
                            ),
                        },
                        {
                            division_name: {
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
                message: 'Get all division successfully',
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
            const data = await division.create(req.body)
            return res.json({
                success: true,
                message: 'Create division successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await division.findOne({
                where: {
                    division_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get division successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await division.update(req.body, {
                where: {
                    division_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update division successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await division.destroy({
                where: {
                    division_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete division successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
