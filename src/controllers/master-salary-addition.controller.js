const errorhandler = require('../helpers/errorhandler.helper')
const { master_salary_addition } = require('../models/index')
const { Op } = require('sequelize')

module.exports = {
    getAll: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'master_salary_code'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } =
                await master_salary_addition.findAndCountAll({
                    where: {
                        master_salary_type: '1',
                        [Op.or]: [
                            {
                                master_salary_name: {
                                    [Op.iLike]: `%${search}%`,
                                },
                            },
                            {
                                master_salary_type: {
                                    [Op.iLike]: `%${search}%`,
                                },
                            },
                        ],
                    },
                    order: [[sortBy, sortOrder]],
                    offset: offset,
                    limit: limit,
                })
            return res.json({
                success: true,
                message: 'Get all master salary successfully',
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
            const data = await master_salary_addition.create(req.body)
            return res.json({
                success: true,
                message: 'Create master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await master_salary_addition.findOne({
                where: {
                    master_salary_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await master_salary_addition.update(req.body, {
                where: {
                    master_salary_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await master_salary_addition.destroy({
                where: {
                    master_salary_code: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete master salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
