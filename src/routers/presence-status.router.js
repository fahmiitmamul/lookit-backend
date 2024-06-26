const presenceStatusRouter = require('express').Router()
const presenceStatusController = require('../controllers/presence-status.controller')

presenceStatusRouter.get('/', presenceStatusController.getAll)
presenceStatusRouter.get('/:id', presenceStatusController.findOneById)
presenceStatusRouter.post('/', presenceStatusController.create)
presenceStatusRouter.patch('/:id', presenceStatusController.update)
presenceStatusRouter.delete('/:id', presenceStatusController.delete)

module.exports = presenceStatusRouter
