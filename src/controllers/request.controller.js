const errorhandler = require('../helpers/errorhandler.helper')
const {
    request,
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
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await request.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_information: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    request_date: {
                        [Op.between]: [startDate, endDate],
                    },
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all request successfully',
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
    getApproved: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await request.findAndCountAll({
                where: {
                    status: 'Setuju',
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_information: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    request_date: {
                        [Op.between]: [startDate, endDate],
                    },
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all approved request successfully',
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
    getEmployeeApproved: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await request.findAndCountAll({
                where: {
                    employee_id: req.query.employee_id,
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_information: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            status: 'Setuju',
                        },
                    ],
                    request_date: {
                        [Op.between]: [startDate, endDate],
                    },
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all approved request successfully',
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
    getPending: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await request.findAndCountAll({
                where: {
                    status: 'Pending',
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_information: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    request_date: {
                        [Op.between]: [startDate, endDate],
                    },
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all pending request successfully',
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
    getEmployeePending: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await request.findAndCountAll({
                where: {
                    employee_id: req.query.employee_id,
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_information: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            status: 'Pending',
                        },
                    ],
                    request_date: {
                        [Op.between]: [startDate, endDate],
                    },
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all pending request successfully',
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
    getRejected: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await request.findAndCountAll({
                where: {
                    status: 'Tolak',
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_information: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    request_date: {
                        [Op.between]: [startDate, endDate],
                    },
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all rejected request successfully',
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
    getEmployeeRejected: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await request.findAndCountAll({
                where: {
                    employee_id: req.query.employee_id,
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            request_information: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            status: 'Tolak',
                        },
                    ],
                    request_date: {
                        [Op.between]: [startDate, endDate],
                    },
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get all rejected request successfully',
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

            const data = await request.create(req.body)
            return res.json({
                success: true,
                message: 'Create request successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await request.findOne({
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
                ],
            })
            return res.json({
                success: true,
                message: 'Get request successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    updateStatus: async (req, res) => {
        try {
            const selectedRequests = req.body.selectedRequestData
            const item = selectedRequests.split(',')

            const data = item.map((item) => parseInt(item))

            const results = data.map(async (item) => {
                await request.update(req.body, {
                    where: {
                        id: item,
                    },
                })
            })

            return res.json({
                success: true,
                message: 'Update requests successfully',
                results: results,
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

            const data = await request.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update request successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await request.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete request successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
