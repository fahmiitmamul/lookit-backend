const errorhandler = require('../helpers/errorhandler.helper')
const { incoming_guarantee } = require('../models/index')
const { employee } = require('../models/index')
const { area } = require('../models/index')
const { branch } = require('../models/index')
const { division } = require('../models/index')
const { position_of_work } = require('../models/index')
const { level } = require('../models/index')
const { province } = require('../models/index')
const { districts } = require('../models/index')
const { regency } = require('../models/index')
const { village } = require('../models/index')
const { guarantee } = require('../models/index')
const { v2: cloudinary } = require('cloudinary')
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
            const { count, rows } = await incoming_guarantee.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            guarantee_condition: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            guarantee_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            recepient_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            guarantee_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            guarantee_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$employee.position.position_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$guarantee.guarantee_name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            '$guarantee.guarantee_type$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        include: [
                            {
                                model: branch,
                                as: 'branch',
                            },
                            {
                                model: position_of_work,
                                as: 'position',
                            },
                        ],
                    },
                    {
                        model: guarantee,
                        as: 'guarantee',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all incoming guarantee successfully',
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

            const guaranteeData = await guarantee.findOne({
                where: { id: req.body.guarantee_id },
            })

            const data = await incoming_guarantee.create({
                ...req.body,
                guarantee_name: guaranteeData.guarantee_name,
                guarantee_type: guaranteeData.guarantee_type,
            })

            return res.json({
                success: true,
                message: 'Create incoming guarantee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await incoming_guarantee.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        include: [
                            {
                                model: branch,
                                as: 'branch',
                            },
                            {
                                model: position_of_work,
                                as: 'position',
                            },
                        ],
                    },
                    {
                        model: guarantee,
                        as: 'guarantee',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get incoming guarantee successfully',
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

            const data = await incoming_guarantee.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })

            return res.json({
                success: true,
                message: 'Update incoming guarantee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await incoming_guarantee.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete incoming guarantee successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
