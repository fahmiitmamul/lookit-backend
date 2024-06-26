const positionOfWorkRouter = require('express').Router()
const positionOfWorkController = require('../controllers/position-of-work.controller')

positionOfWorkRouter.get('/', positionOfWorkController.getAll)
positionOfWorkRouter.get('/:id', positionOfWorkController.findOneById)
positionOfWorkRouter.get('/employee', positionOfWorkController.getEmployee)
positionOfWorkRouter.post('/', positionOfWorkController.create)
positionOfWorkRouter.patch('/:id', positionOfWorkController.update)
positionOfWorkRouter.delete('/:id', positionOfWorkController.delete)

module.exports = positionOfWorkRouter
