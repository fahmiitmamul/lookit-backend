const scheduleRouter = require('express').Router()
const scheduleController = require('../controllers/schedule.controller')

scheduleRouter.get('/', scheduleController.getAll)
scheduleRouter.get('/:id', scheduleController.findOneById)
scheduleRouter.post('/', scheduleController.create)
scheduleRouter.post('/flexible', scheduleController.createFlexible)
scheduleRouter.patch('/:id', scheduleController.update)
scheduleRouter.delete('/:id', scheduleController.delete)

module.exports = scheduleRouter
