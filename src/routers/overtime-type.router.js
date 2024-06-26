const overtimeTypeRouter = require('express').Router()
const overtimeTypeController = require('../controllers/overtime-type.controller')

overtimeTypeRouter.get('/', overtimeTypeController.getAll)
overtimeTypeRouter.get('/:id', overtimeTypeController.findOneById)
overtimeTypeRouter.post('/', overtimeTypeController.create)
overtimeTypeRouter.patch('/:id', overtimeTypeController.update)
overtimeTypeRouter.delete('/:id', overtimeTypeController.delete)

module.exports = overtimeTypeRouter
