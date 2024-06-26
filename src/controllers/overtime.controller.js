const errorhandler = require('../helpers/errorhandler.helper')
const {
    overtime,
    employee,
    branch,
    position_of_work,
    overtime_type,
} = require('../models/index')
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
            const { count, rows } = await overtime.findAndCountAll({
                where: {
                    start_date: {
                        [Op.between]: [startDate, endDate],
                    },
                    [Op.or]: [
                        {
                            '$employee.name$': {
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
                        model: overtime_type,
                        as: 'overtime_type',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all overtime successfully',
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
    getSend: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await overtime.findAndCountAll({
                where: {
                    start_date: {
                        [Op.between]: [startDate, endDate],
                    },
                    [Op.and]: {
                        status: {
                            [Op.like]: 'Verifikasi',
                        },
                        status_id: {
                            [Op.eq]: 1,
                        },
                    },
                    [Op.or]: [
                        {
                            '$employee.name$': {
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
                        model: overtime_type,
                        as: 'overtime_type',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all overtime successfully',
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
    getData: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await overtime.findAndCountAll({
                where: {
                    start_date: {
                        [Op.between]: [startDate, endDate],
                    },
                    status_id: {
                        [Op.eq]: 2,
                    },
                    [Op.or]: {
                        [Op.or]: [
                            {
                                status: {
                                    [Op.like]: 'Verifikasi',
                                },
                                status: {
                                    [Op.like]: 'Setuju',
                                },
                                status: {
                                    [Op.like]: 'Tolak',
                                },
                            },
                        ],
                        [Op.or]: [
                            {
                                isApproved: 'true',
                            },
                            {
                                isApproved: 'false',
                            },
                        ],
                    },
                    [Op.or]: [
                        {
                            '$employee.name$': {
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
                        model: overtime_type,
                        as: 'overtime_type',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all overtime successfully',
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
            const { count, rows } = await overtime.findAndCountAll({
                where: {
                    status: {
                        [Op.like]: 'Setuju',
                    },
                    start_date: {
                        [Op.between]: [startDate, endDate],
                    },
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    status_id: {
                        [Op.eq]: 2,
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
                    {
                        model: overtime_type,
                        as: 'overtime_type',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all overtime successfully',
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
    getDeclined: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const startDate = req.query.startDate || '1-1-1990'
            const endDate = req.query.endDate || new Date()
            const { count, rows } = await overtime.findAndCountAll({
                where: {
                    status: {
                        [Op.like]: 'Tolak',
                    },
                    start_date: {
                        [Op.between]: [startDate, endDate],
                    },
                    [Op.or]: [
                        {
                            '$employee.name$': {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                    ],
                    status_id: {
                        [Op.eq]: 2,
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
                    {
                        model: overtime_type,
                        as: 'overtime_type',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all overtime successfully',
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
                req.body.file = req.file.filename
            }

            const employeeArray = req.body.employee
            const employeeData = employeeArray.split(',').map(Number)

            for (const employees of employeeData) {
                const emp_nik = await employee.findOne({
                    where: { id: employees },
                })

                if (emp_nik) {
                    await overtime.create({
                        ...req.body,
                        employee_id: employees,
                        employee_nik: emp_nik.employee_nik,
                    })
                } else {
                    console.error(`Employee with id ${employees} not found`)
                }
            }

            return res.json({
                success: true,
                message: 'Create overtime successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await overtime.findOne({
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
                        model: overtime_type,
                        as: 'overtime_type',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get overtime successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    updateStatus: async (req, res) => {
        try {
            const selectedOvertime = req.body.selectedOvertimeData
            const item = selectedOvertime.split(',')

            const data = item.map((item) => parseInt(item))

            const results = data.map(async (item) => {
                await overtime.update(req.body, {
                    where: {
                        id: item,
                    },
                })
            })

            return res.json({
                success: true,
                message: 'Update overtimes successfully',
                results: results,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await overtime.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update overtime successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await overtime.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete overtime successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
