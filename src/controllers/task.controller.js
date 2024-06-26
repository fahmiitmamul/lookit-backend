const errorhandler = require('../helpers/errorhandler.helper')
const { tasks } = require('../models/index')
const { employee } = require('../models/index')
const { branch } = require('../models/index')
const { position_of_work } = require('../models/index')
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
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tasks.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            task_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_priority: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            proof_of_assignment: {
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
                message: 'Get all tasks successfully',
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
    getProcessTasks: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tasks.findAndCountAll({
                where: {
                    task_status: {
                        [Op.eq]: 0,
                    },
                    [Op.or]: [
                        {
                            task_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_priority: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            proof_of_assignment: {
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
                message: 'Get all tasks successfully',
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
    getEmployeeProcessTasks: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tasks.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            employee_id: req.query.employee_id,
                        },
                        {
                            task_status: {
                                [Op.eq]: 0,
                            },
                        },
                    ],
                    [Op.or]: [
                        {
                            task_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_priority: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            proof_of_assignment: {
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
                message: 'Get all tasks successfully',
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
    getFinishedTasks: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tasks.findAndCountAll({
                where: {
                    task_status: {
                        [Op.eq]: 1,
                    },
                    [Op.or]: [
                        {
                            task_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_priority: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            proof_of_assignment: {
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
                message: 'Get all tasks successfully',
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
    getEmployeeFinishedTasks: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tasks.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            employee_id: req.query.employee_id,
                        },
                        {
                            task_status: {
                                [Op.eq]: 1,
                            },
                        },
                    ],
                    [Op.or]: [
                        {
                            task_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_priority: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            proof_of_assignment: {
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
                message: 'Get all tasks successfully',
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
    getCanceledTasks: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tasks.findAndCountAll({
                where: {
                    task_status: {
                        [Op.eq]: 2,
                    },
                    [Op.or]: [
                        {
                            task_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_priority: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            proof_of_assignment: {
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
                message: 'Get all tasks successfully',
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
    getEmployeeCanceledTasks: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await tasks.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            employee_id: req.query.employee_id,
                        },
                        {
                            task_status: {
                                [Op.eq]: 2,
                            },
                        },
                    ],
                    [Op.or]: [
                        {
                            task_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_end_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_priority: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            task_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            proof_of_assignment: {
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
                message: 'Get all tasks successfully',
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
            if (req?.files?.files) {
                req.body.file = req.files.files.map((item) => ({
                    filename: item.originalname,
                }))
            }

            if (req?.files?.files) {
                req?.files?.files?.map(async (item) => {
                    await cloudinary.uploader
                        .upload_stream({
                            resource_type: 'raw',
                            public_id: item?.originalname,
                            unique_filename: false,
                            folder: 'file',
                            transformation: [
                                { width: 300, height: 300, crop: 'limit' },
                            ],
                        })
                        .end(item?.buffer)
                })
            }

            if (req?.files?.proof_of_assignment?.[0]?.originalname) {
                req.body.proof_of_assignment =
                    req?.files?.proof_of_assignment?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id:
                        req?.files?.proof_of_assignment?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'file',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.proof_of_assignment?.[0]?.buffer)

            const data = await tasks.create(req.body)
            return res.json({
                success: true,
                message: 'Create tasks successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await tasks.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get tasks successfully',
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

            if (req?.files?.proof_of_assignment?.[0]?.originalname) {
                req.body.proof_of_assignment =
                    req?.files?.proof_of_assignment?.[0]?.originalname
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

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id:
                        req?.files?.proof_of_assignment?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'file',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.proof_of_assignment?.[0]?.buffer)

            const data = await tasks.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update tasks successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await tasks.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete tasks successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
