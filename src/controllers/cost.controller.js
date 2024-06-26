const errorhandler = require('../helpers/errorhandler.helper')
const { cost } = require('../models/index')
const { Op } = require('sequelize')
const { v2: cloudinary } = require('cloudinary')

module.exports = {
    getAll: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const search = req.query.search || ''
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await cost.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            cost_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            cost_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            cost_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            cost_value: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            cost_tax_percentage: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            cost_tax_result: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            cost_grand_total: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            cost_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    cost_date: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all cost successfully',
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
            if (req?.files?.file?.[0]?.originalname) {
                req.body.file = req?.files?.file?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.file?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'file',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.file?.[0]?.buffer)

            const data = await cost.create(req.body)
            return res.json({
                success: true,
                message: 'Create cost successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await cost.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get cost successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req?.files?.file?.[0]?.originalname) {
                req.body.file = req?.files?.file?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.file?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'file',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.file?.[0]?.buffer)

            const data = await cost.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update cost successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await cost.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete cost successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
