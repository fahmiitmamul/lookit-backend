const errorhandler = require('../helpers/errorhandler.helper')
const { chat, employee } = require('../models/index')

module.exports = {
    getAll: async (req, res) => {
        try {
            const sender_id = req.query.sender_id
            const receiver_id = req.query.receiver_id
            const data = await chat.findAll({
                where: {
                    sender_id: sender_id,
                    receiver_id: receiver_id,
                },
                include: [
                    {
                        model: employee,
                        attributes: ['id', 'name', 'profile_photo'],
                        as: 'employee',
                    },
                ],
            })
            return res.json({
                success: true,
                message: 'Get chats successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    create: async (req, res) => {
        try {
            const data = await chat.create(req.body)
            return res.json({
                success: true,
                message: 'Create chat successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    findOneById: async (req, res) => {
        try {
            const data = await chat.findOne({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Get chat successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    update: async (req, res) => {
        try {
            const data = await chat.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Update chat successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    delete: async (req, res) => {
        try {
            const data = await chat.destroy({
                where: {
                    id: req.params.id,
                },
            })
            return res.json({
                success: true,
                message: 'Delete chat successfully',
                results: data,
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
