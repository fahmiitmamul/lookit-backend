const chatRouter = require('express').Router()
const chatController = require('../controllers/chat.controller')

chatRouter.get('/', chatController.getAll)
chatRouter.get('/:id', chatController.findOneById)
chatRouter.post('/', chatController.create)
chatRouter.patch('/:id', chatController.update)
chatRouter.delete('/:id', chatController.delete)

module.exports = chatRouter
