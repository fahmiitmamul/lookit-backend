const { user } = require('../models/index')
const { forgot_request } = require('../models/index')
const argon = require('argon2')
const jwt = require('jsonwebtoken')
const errorhandler = require('../helpers/errorhandler.helper')

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const users = await user.findOne({
                where: {
                    email: email,
                },
            })
            if (!users) {
                throw Error('auth_no_email')
            }
            const verify = await argon.verify(users.password, password)
            if (!verify) {
                throw Error('auth_wrong_password')
            }
            const token = jwt.sign({ id: users.id }, process.env.APP_SECRET)
            return res.json({
                success: true,
                message: 'Login successfully',
                results: { token },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },

    register: async (req, res) => {
        try {
            const { email, password } = req.body
            const checkEmail = await user.findOne({
                where: {
                    email: email,
                },
            })
            if (checkEmail) {
                throw Error('auth_duplicate_email')
            }
            const hashedPassword = await argon.hash(password)
            const data = {
                ...req.body,
                password: hashedPassword,
            }

            const users = await user.create(data)

            const token = jwt.sign({ id: users.id }, process.env.APP_SECRET)
            return res.json({
                success: true,
                message: 'Register successfully',
                results: { token },
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const { email } = req.body
            const users = await user.findOne({
                where: {
                    email: email,
                },
            })
            if (!users) {
                throw Error('no_user')
            }
            const randomNumber = Math.random()
            const rounded = Math.round(randomNumber * 100000)
            const padded = String(rounded).padEnd(6, '0')

            const forgot = await forgot_request.create({
                email: users.email,
                code: padded,
            })
            if (!forgot) {
                throw Error('forgot_failed')
            }
            return res.json({
                success: true,
                message: 'Request reset password successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { code, email, password } = req.body
            const find = await forgot_request.findOne({
                where: {
                    email: email,
                    code: code,
                },
            })

            if (!find) {
                throw Error('no_forgot_request')
            }
            const selectedUser = await user.findOne({
                where: {
                    email: email,
                },
            })

            const data = {
                password: await argon.hash(password),
            }
            const users = await user.update(
                { password: data.password },
                {
                    where: {
                        id: selectedUser.id,
                    },
                }
            )
            if (!users) {
                throw Error('no_forgot_requests')
            }
            await forgot_request.destroy({
                where: {
                    id: find.id,
                },
            })
            return res.json({
                success: true,
                message: 'Reset password successfully',
            })
        } catch (err) {
            return errorhandler(res, err)
        }
    },
}
