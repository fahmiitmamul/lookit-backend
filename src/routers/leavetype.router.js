const leaveTypeRouter = require('express').Router()
const leaveTypeController = require('../controllers/leave-type.controller')

leaveTypeRouter.get('/', leaveTypeController.getAll)
leaveTypeRouter.get('/:id', leaveTypeController.findOneById)
leaveTypeRouter.post('/', leaveTypeController.create)
leaveTypeRouter.patch('/:id', leaveTypeController.update)
leaveTypeRouter.delete('/:id', leaveTypeController.delete)

module.exports = leaveTypeRouter
