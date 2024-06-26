const sendMailRouter = require('express').Router()
const sendMailController = require('../controllers/sendmail.controller')

sendMailRouter.post('/', sendMailController.sendMail)

module.exports = sendMailRouter
