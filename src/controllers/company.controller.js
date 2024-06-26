const errorhandler = require('../helpers/errorhandler.helper')
const { company } = require('../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await company.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            logo: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            company_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            brand_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            business_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            email: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            company_phone_number: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            latitude: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            longitude: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            maps: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            full_address: {
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
                message: 'Get all head office successfully',
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
            if (req.file) {
                req.body.logo = req.file.filename
            }
            const data = await company.create(req.body)
            return res.json({
                success: true,
                message: 'Create head office successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await company.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get head office successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.logo = req.file.filename
            }
            const data = await company.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update head office successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await company.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete head office successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
