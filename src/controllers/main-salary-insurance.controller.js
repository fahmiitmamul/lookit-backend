const errorhandler = require('../helpers/errorhandler.helper')
const {
    main_salary_insurance,
    employee,
    branch,
    position_of_work,
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
            const { count, rows } = await main_salary_insurance.findAndCountAll(
                {
                    where: {
                        [Op.or]: [
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
                }
            )
            return res.json({
                success: true,
                message: 'Get all main salary successfully',
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
            const main_salary_insurance_data =
                await main_salary_insurance.findOne({
                    where: {
                        employee_id: req.body.employee_id,
                    },
                })

            if (main_salary_insurance_data) {
                await main_salary_insurance.update(
                    {
                        ...req.body,
                        main_salary_insurance_value: JSON.parse(
                            req.body.main_salary_insurance_value
                        ),
                    },
                    {
                        where: {
                            id: main_salary_insurance_data.id,
                        },
                    }
                )
            } else {
                await main_salary_insurance.create({
                    ...req.body,
                    main_salary_insurance_value: JSON.parse(
                        req.body.main_salary_insurance_value
                    ),
                })
            }
            return res.json({
                success: true,
                message: 'Create main salary successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await main_salary_insurance.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get main salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneByEmployeeId: async (req, res) => {
        try {
            const data = await main_salary_insurance.findOne({
                where: {
                    employee_id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get main salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await main_salary_insurance.update(
                {
                    ...req.body,
                    main_salary_insurance_value: JSON.parse(
                        req.body.main_salary_insurance_value
                    ),
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            )
            return res.json({
                success: true,
                message: 'Update main salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await main_salary_insurance.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete main salary successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
