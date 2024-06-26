const errorhandler = require('../helpers/errorhandler.helper')
const { incoming_assets } = require('../models/index')
const { employee } = require('../models/index')
const { branch } = require('../models/index')
const { position_of_work } = require('../models/index')
const { assets } = require('../models/index')
const { outgoing_assets } = require('../models/index')
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
            const { count, rows } = await incoming_assets.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
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
                        {
                            asset_quantity: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_description: {
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
                        model: outgoing_assets,
                        as: 'outgoing_assets',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all incoming assets successfully',
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
    getAllEmployeeIncomingAssets: async (req, res) => {
        try {
            const search = req.query.search || ''
            const limit = parseInt(req.query.limit) || 5
            const page = parseInt(req.query.page) || 1
            const offset = (page - 1) * limit
            const sortBy = req.query.sortBy || 'id'
            const sortOrder = req.query.sortOrder || 'asc'
            const { count, rows } = await incoming_assets.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            employee_id: req.query.employee_id,
                        },
                        {
                            file: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            start_date: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
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
                        {
                            asset_quantity: {
                                [Op.iLike]: `%${search}%`,
                            },
                        },
                        {
                            asset_description: {
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
                        model: outgoing_assets,
                        as: 'outgoing_assets',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get all incoming assets successfully',
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

            const outgoingAssetsData = await outgoing_assets.findOne({
                where: { id: req.body.outgoing_asset_id },
            })

            const updatedAssetsQuantity =
                outgoingAssetsData.asset_quantity - req.body.asset_quantity

            await outgoing_assets.update(
                { asset_quantity: updatedAssetsQuantity },
                {
                    where: {
                        id: req.body.outgoing_asset_id,
                    },
                }
            )

            const data = await incoming_assets.create({
                ...req.body,
                picture: outgoingAssetsData.picture,
                asset_name: outgoingAssetsData.asset_name,
                asset_brand: outgoingAssetsData.asset_brand,
                asset_type: outgoingAssetsData.asset_type,
                asset_color: outgoingAssetsData.asset_color,
                asset_code: outgoingAssetsData.asset_code,
            })

            const assets_data = await assets.findOne({
                where: {
                    id: outgoingAssetsData.asset_id,
                },
            })

            await assets.update(
                {
                    asset_quantity:
                        parseInt(assets_data.asset_quantity) +
                        parseInt(req.body.asset_quantity),
                },
                {
                    where: {
                        id: outgoingAssetsData.asset_id,
                    },
                }
            )

            return res.json({
                success: true,
                message: 'Create incoming assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await incoming_assets.findOne({
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
                        model: outgoing_assets,
                        as: 'outgoing_assets',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get incoming assets successfully',
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

            const data = await incoming_assets.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })

            return res.json({
                success: true,
                message: 'Update incoming assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await incoming_assets.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete incoming assets successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
