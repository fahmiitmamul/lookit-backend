const errorhandler = require('../helpers/errorhandler.helper')
const {
    activity,
    employee,
    branch,
    position_of_work,
} = require('../models/index')
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
            const { count, rows } = await activity.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            activity_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            activity_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            activity_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            status: {
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
                message: 'Get all activity successfully',
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

            const data = await activity.create(req.body)
            return res.json({
                success: true,
                message: 'Create activity successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await activity.findAll({
                where: {
                    id: req.params.id,
                },
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
                message: 'Get activity successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    getAllEmployeeActivity: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await activity.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            activity_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            activity_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            activity_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            status: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            employee_id: req.query.employee_id,
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
                message: 'Get all activity successfully',
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

            const data = await activity.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update activity successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await activity.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete activity successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
