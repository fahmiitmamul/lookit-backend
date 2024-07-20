const dayjs = require('dayjs')
const errorhandler = require('../helpers/errorhandler.helper')
const { presence } = require('../models/index')
const { presence_status } = require('../models/index')
const { schedule } = require('../models/index')
const { employee } = require('../models/index')
const { shift } = require('../models/index')
const { Op } = require('sequelize')
const { v2: cloudinary } = require('cloudinary')

module.exports = {
    getAll: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await presence.findAndCountAll({
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all presence successfully',
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
    getEmployeePresence: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    employee_id: req.query.employee_id,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all employee presence successfully',
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
    getPresent: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 1,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all present successfully',
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
    getEmployeePresent: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 1,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all present successfully',
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
    getArrivingLate: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 2,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all arriving late successfully',
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
    getEmployeeArrivingLate: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 2,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all arriving late successfully',
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
    getGoEarly: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 3,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all Go Early successfully',
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
    getEmployeeGoEarly: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 3,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all Go Early successfully',
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
    getNotAbsent: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 4,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all not absent successfully',
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
    getEmployeeNotAbsent: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 4,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all not absent successfully',
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
    getAlpha: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 5,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all alpha successfully',
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
    getEmployeeAlpha: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 5,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all alpha successfully',
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
    getSick: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 6,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all sick successfully',
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
    getEmployeeSick: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 6,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all sick successfully',
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
    getPermission: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 7,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all permission successfully',
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
    getEmployeePermission: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 7,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all permission successfully',
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
    getLeaveType: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 8,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all leave type successfully',
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
    getEmployeeLeaveType: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 8,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all leave type successfully',
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
    getHoliday: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 9,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all holiday successfully',
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
    getEmployeeHoliday: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 9,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all holiday successfully',
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
    getOvertime: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    presence_status_id: 10,
                },
                order: [[sortBy, sortOrder]],
                offset: offset,
                limit: limit,
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
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
    getEmployeeOvertime: async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = 'createdAt'
            const sortOrder = 'desc'
            const { count, rows } = await presence.findAndCountAll({
                where: {
                    [Op.and]: [
                        {
                            presence_status_id: 10,
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
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
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
    AbsentIn: async (req, res) => {
        try {
            const startOfDay = dayjs().startOf('day').toDate()

            const endOfDay = dayjs().endOf('day').toDate()

            const findPresence = await presence.findAll({
                where: {
                    employee_id: {
                        [Op.eq]: req.body.employee_id,
                    },
                    createdAt: {
                        [Op.between]: [startOfDay, endOfDay],
                    },
                },
            })

            if (findPresence.length !== 0) {
                return res.json({
                    success: false,
                    message: 'Hari ini sudah absen',
                })
            }

            const scheduleData = await employee.findOne({
                where: {
                    id: req.body.employee_id,
                },
                include: {
                    model: schedule,
                    as: 'schedules',
                    include: {
                        model: shift,
                        as: 'shift',
                    },
                    where: {
                        start: {
                            [Op.iLike]: dayjs().format('YYYY-MM-DD'),
                        },
                    },
                },
            })

            if (!scheduleData) {
                return res.json({
                    success: false,
                    message: 'Tidak ada karyawan',
                })
            }

            const now = dayjs().format('HH:mm')

            if (scheduleData.schedules[0].is_holiday) {
                return res.json({
                    success: false,
                    message: 'Hari Libur tidak bisa absen',
                })
            } else {
                if (
                    now >= scheduleData.schedules[0].shift.maximal_start_time &&
                    now <= scheduleData.schedules[0].shift.minimal_end_time
                ) {
                    await presence.create({
                        employee_id: req.body.employee_id,
                        start_time: now,
                        shift_id: scheduleData.schedules[0].shift_id,
                        presence_status_id: 2,
                        start: dayjs().format('YYYY-MM-DD'),
                        end: dayjs().format('YYYY-MM-DD'),
                    })
                } else if (
                    now >= scheduleData.schedules[0].shift.minimal_start_time &&
                    now <= scheduleData.schedules[0].shift.maximal_start_time
                ) {
                    await presence.create({
                        employee_id: req.body.employee_id,
                        start_time: now,
                        shift_id: scheduleData.schedules[0].shift_id,
                        presence_status_id: 1,
                        start: dayjs().format('YYYY-MM-DD'),
                        end: dayjs().format('YYYY-MM-DD'),
                    })
                } else {
                    return res.json({
                        success: false,
                        results: 'Absen belum bisa',
                    })
                }
            }

            return res.json({
                success: true,
                message: 'Absent In presence successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    AbsentOut: async (req, res) => {
        try {
            const startOfDay = dayjs().startOf('day').toDate()

            const endOfDay = dayjs().endOf('day').toDate()

            const findPresence = await presence.findAll({
                where: {
                    employee_id: req.body.employee_id,
                    createdAt: {
                        [Op.between]: [startOfDay, endOfDay],
                    },
                },
            })

            if (findPresence.length === 0) {
                return res.json({
                    success: false,
                    message: 'Silahkan absen terlebih dahulu',
                })
            } else {
                if (findPresence[0].end_time !== null) {
                    return res.json({
                        success: false,
                        message: 'Sudah absen out',
                    })
                }
            }

            const scheduleData = await employee.findOne({
                where: {
                    id: req.body.employee_id,
                },
                include: {
                    model: schedule,
                    as: 'schedules',
                    include: {
                        model: shift,
                        as: 'shift',
                    },
                    where: {
                        start: {
                            [Op.iLike]: dayjs().format('YYYY-MM-DD'),
                        },
                    },
                },
            })

            if (!scheduleData) {
                return res.json({
                    success: false,
                    message: 'Tidak ada karyawan',
                })
            }

            const now = dayjs().format('HH:mm')

            const total_time =
                parseInt(now) - parseInt(findPresence[0].start_time)

            if (scheduleData.schedules[0].is_holiday) {
                return res.json({
                    success: false,
                    message: 'Hari Libur tidak bisa absen',
                })
            } else {
                if (
                    now >= scheduleData.schedules[0].shift.minimal_end_time &&
                    now <= scheduleData.schedules[0].shift.maximal_end_time
                ) {
                    await presence.update(
                        {
                            end_time: now,
                            total_time: total_time,
                            shift_id: scheduleData.schedules[0].shift_id,
                        },
                        {
                            where: {
                                id: findPresence[0].id,
                            },
                        }
                    )
                } else {
                    return res.json({
                        success: false,
                        results: 'Absen belum bisa',
                    })
                }
            }

            return res.json({
                success: true,
                message: 'Absent Out presence successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    AbsentManual: async (req, res) => {
        try {
            if (req?.files?.file_in?.[0]?.originalname) {
                req.body.file_in = req?.files?.file_in?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.file_in?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'file',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.file_in?.[0]?.buffer)

            if (req?.files?.file_out?.[0]?.originalname) {
                req.body.file_out = req?.files?.file_out?.[0]?.originalname
            }

            await cloudinary.uploader
                .upload_stream({
                    resource_type: 'raw',
                    public_id: req?.files?.file_out?.[0]?.originalname,
                    unique_filename: false,
                    folder: 'file',
                    transformation: [
                        { width: 300, height: 300, crop: 'limit' },
                    ],
                })
                .end(req?.files?.file_out?.[0]?.buffer)

            const data = await presence.create(req.body)
            return res.json({
                success: true,
                message: 'Get presence successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await presence.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get presence successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneByEmployeeId: async (req, res) => {
        const employeeIds = req.params.id.split(',').map(Number)
        try {
            const data = await presence.findAll({
                where: {
                    employee_id: employeeIds,
                },
                include: [
                    {
                        model: employee,
                        as: 'employee',
                    },
                    {
                        model: presence_status,
                        as: 'presence_status',
                    },
                    {
                        model: shift,
                        as: 'shift',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get presence successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    AbsentOvertime: async (req, res) => {
        try {
            const data = await presence.create(req.body)
            return res.json({
                success: true,
                message: 'Absent Overtime successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await presence.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update presence successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await presence.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete presence successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
