const errorhandler = require('../helpers/errorhandler.helper')
const { mutation } = require('../models/index')
const { employee } = require('../models/index')
const { area } = require('../models/index')
const { branch } = require('../models/index')
const { position_of_work } = require('../models/index')
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
            const { count, rows } = await mutation.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            date_created: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            date_applied: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            mutation_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
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
                    {
                        model: area,
                        as: 'last_area',
                    },
                    {
                        model: position_of_work,
                        as: 'last_position',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all mutation successfully',
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
    getLocation: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await mutation.findAndCountAll({
                where: {
                    mutation_type: 1,
                    [Op.or]: [
                        {
                            date_created: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            date_applied: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            mutation_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
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
                            {
                                model: area,
                                as: 'area',
                            },
                        ],
                    },
                    {
                        model: area,
                        as: 'last_area',
                    },
                    {
                        model: position_of_work,
                        as: 'last_position',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all mutation area successfully',
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
    getEmployeeLocation: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await mutation.findAndCountAll({
                where: {
                    mutation_type: 1,
                    [Op.or]: [
                        {
                            date_created: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            date_applied: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            mutation_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
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
                            employee_id: req.query.employee_id,
                        },
                    ],
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
                            {
                                model: area,
                                as: 'area',
                            },
                        ],
                    },
                    {
                        model: area,
                        as: 'last_area',
                    },
                    {
                        model: position_of_work,
                        as: 'last_position',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all mutation area successfully',
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
    getPosition: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await mutation.findAndCountAll({
                where: {
                    mutation_type: 2,
                    [Op.or]: [
                        {
                            date_created: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            date_applied: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            mutation_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
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
                    {
                        model: position_of_work,
                        as: 'last_position',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all mutation successfully',
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
    getEmployeePosition: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await mutation.findAndCountAll({
                where: {
                    mutation_type: 2,
                    [Op.or]: [
                        {
                            date_created: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            date_applied: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            mutation_description: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            file: {
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
                            employee_id: req.query.employee_id,
                        },
                    ],
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
                    {
                        model: position_of_work,
                        as: 'last_position',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all mutation successfully',
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
    createLocation: async (req, res) => {
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

            await employee.update(
                { area_id: req.body.area_id },
                { where: { id: req.body.employee_id } }
            )

            const data = await mutation.create(req.body)
            return res.json({
                success: true,
                message: 'Create mutation successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    createPosition: async (req, res) => {
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

            await employee.update(
                { position_id: req.body.position_id },
                { where: { id: req.body.employee_id } }
            )

            const data = await mutation.create(req.body)
            return res.json({
                success: true,
                message: 'Create mutation successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await mutation.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get mutation successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    updateLocation: async (req, res) => {
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

            await employee.update(
                { area_id: req.body.area_id },
                { where: { id: req.body.employee_id } }
            )

            const data = await mutation.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update mutation successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    updatePosition: async (req, res) => {
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

            await employee.update(
                { position_id: req.body.position_id },
                { where: { id: req.body.employee_id } }
            )

            const data = await mutation.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update mutation successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await mutation.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete mutation successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
