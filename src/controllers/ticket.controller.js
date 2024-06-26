const errorhandler = require('../helpers/errorhandler.helper')
const { tickets } = require('../models/index')
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
const { Op } = require('sequelize')
const { v2: cloudinary } = require('cloudinary')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tickets.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_title: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [
                    [{ model: employee, as: 'employee' }, sortBy, sortOrder],
                ],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        attributes: ['id', 'name'],
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all ticket successfully',
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
    getOpenTicket: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tickets.findAndCountAll({
                where: {
                    ticket_status: {
                        [Op.iLike]: '1',
                    },
                    [Op.or]: [
                        {
                            date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_title: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [
                    [{ model: employee, as: 'employee' }, sortBy, sortOrder],
                ],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        attributes: ['id', 'name'],
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all ticket successfully',
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
    getClosedTicket: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tickets.findAndCountAll({
                where: {
                    ticket_status: {
                        [Op.iLike]: '2',
                    },
                    [Op.or]: [
                        {
                            date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_title: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [
                    [{ model: employee, as: 'employee' }, sortBy, sortOrder],
                ],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        attributes: ['id', 'name'],
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all ticket successfully',
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
    getPendingTicket: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tickets.findAndCountAll({
                where: {
                    ticket_status: {
                        [Op.iLike]: '3',
                    },
                    [Op.or]: [
                        {
                            date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_title: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            ticket_status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    createdAt: {
                        [Op.between]: [startDate, endDate],
                    },
                },
                order: [
                    [{ model: employee, as: 'employee' }, sortBy, sortOrder],
                ],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                        attributes: ['id', 'name'],
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all ticket successfully',
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

            const data = await tickets.create(req.body)
            return res.json({
                success: true,
                message: 'Create ticket successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await tickets.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get ticket successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req?.files?.file_action?.[0]?.originalname) {
                req.body.file_action =
                    req?.files?.file_action?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.file_action?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'file',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.file_action?.[0]?.buffer)

            const data = await tickets.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update ticket successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await tickets.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete ticket successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
