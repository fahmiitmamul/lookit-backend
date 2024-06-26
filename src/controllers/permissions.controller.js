const errorhandler = require('../helpers/errorhandler.helper')
const { permission_name } = require('../models/index')
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
            const { count, rows } = await permission_name.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            permission_name: {
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
    create: async (req, res) => {
        try {
            const permissionsData = await permission_name.findOne({
                where: {
                    permission_name: req.body.permission_name,
                },
            })
            if (permissionsData) {
                await permission_name.update(
                    {
                        ...req.body,
                        permissions: JSON.parse(req.body.permissions),
                    },
                    {
                        where: {
                            permission_name: req.body.permission_name,
                        },
                    }
                )
            } else {
                await permission_name.create({
                    ...req.body,
                    permissions: JSON.parse(req.body.permissions),
                })
            }
            return res.json({
                success: true,
                message: permissionsData
                    ? 'Update permission successfully'
                    : 'Create permission successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneByName: async (req, res) => {
        try {
            const data = await permission_name.findOne({
                where: {
                    permission_name: req.params.name,
                },
            })
            return res.json({
                success: true,
                message: 'Get permission successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await permission_name.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update permission successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await permission_name.destroy({
                where: {
                    permission_name: req.params.name,
                },
            })
            return res.json({
                success: true,
                message: 'Delete permission successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
