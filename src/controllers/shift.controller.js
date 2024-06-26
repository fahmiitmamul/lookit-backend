const errorhandler = require('../helpers/errorhandler.helper')
const { shift } = require('../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await shift.findAndCountAll({
                where: {
                    shift_name: {
                        [Op.ne]: 'Libur',
                    },
                    shift_code: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all shift successfully',
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
    getAllIncludeHoliday: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const { count, rows } = await shift.findAndCountAll({
                where: {
                    shift_name: {
                        [Op.iLike]: `%${search}%`,
                    },
                    shift_code: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
                order: [['id', 'ASC']],
                offset: offset,
                limit: limit,
            })
            return res.json({
                success: true,
                message: 'Get all shift successfully',
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
    findOneById: async (req, res) => {
        try {
            const data = await shift.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get shift successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneByName: async (req, res) => {
        try {
            const data = await shift.findOne({
                where: {
                    shift_name: req.query.shift,
                },
            })
            return res.json({
                success: true,
                message: 'Get shift successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await shift.create({
                ...req.body,
                shift_name: `${req.body.shift_name} (${req.body.start_time}-${req.body.end_time})`,
            })
            return res.json({
                success: true,
                message: 'Create shift successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await shift.update(
                {
                    ...req.body,
                    shift_name: `${req.body.shift_name} (${req.body.start_time}-${req.body.end_time})`,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            return res.json({
                success: true,
                message: 'Update shift successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await shift.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete shift successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
