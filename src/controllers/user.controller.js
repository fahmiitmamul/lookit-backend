const errorhandler = require('../helpers/errorhandler.helper')
const { user } = require('../models/index')
const { role } = require('../models/index')
const { employee } = require('../models/index')

module.exports = {
    create: async (req, res) => {
        try {
            const data = await user.create(req.body)
            return res.json({
                success: true,
                message: 'Create user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOne: async (req, res) => {
        try {
            const data = await user.findOne({
                where: {
                    id: req.user.id,
                },
                attributes: { exclude: ['password'] },
                include: [
                    {
                        model: role,
                        as: 'role',
                    },
                    {
                        model: employee,
                        as: 'employee',
                        attributes: ['id', 'name', 'profile_photo'],
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await user.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await user.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete user successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
