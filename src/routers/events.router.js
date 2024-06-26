const eventsRouter = require('express').Router()
const eventsController = require('../controllers/events.controller')

eventsRouter.get('/', eventsController.getAll)
eventsRouter.get('/:id', eventsController.findOneById)
eventsRouter.post('/', eventsController.create)
eventsRouter.patch('/:id', eventsController.update)
eventsRouter.delete('/:id', eventsController.delete)

module.exports = eventsRouter
