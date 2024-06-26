const errorhandler = require('../helpers/errorhandler.helper')
const { assets } = require('../models/index')
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
            const { count, rows } = await assets.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            asset_name: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_brand: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_type: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_color: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_code: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_quantity: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_condition: {
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
                message: 'Get all assets successfully',
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
                req.body.picture = req.file.filename
            }
            const data = await assets.create(req.body)
            return res.json({
                success: true,
                message: 'Create assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    bulkCreate: async (req, res) => {
        try {
            function transformData(inputData) {
                const transformedData = []

                inputData.forEach((originalData) => {
                    const transformedItem = {
                        asset_name: originalData['Nama Aset'],
                        asset_brand: originalData['Merek Aset'],
                        asset_type: originalData['Jenis Aset'],
                        asset_color: originalData['Warna Aset'],
                        asset_code: originalData['Kode Aset'],
                        asset_quantity: originalData['Jumlah Aset'],
                        asset_condition: originalData['Kondisi Aset'],
                    }

                    transformedData.push(transformedItem)
                })

                return transformedData
            }

            const assetsData = transformData(req.body)

            const data = await assets.bulkCreate(assetsData)

            return res.json({
                success: true,
                message: 'Create bulk assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await assets.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            if (req.file) {
                req.body.picture = req.file.filename
            }
            const data = await assets.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await assets.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
