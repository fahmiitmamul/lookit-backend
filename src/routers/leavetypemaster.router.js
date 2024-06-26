const leaveTypeMasterRouter = require('express').Router()
const leaveTypeMasterController = require('../controllers/leavetypemaster.controller')

leaveTypeMasterRouter.get('/', leaveTypeMasterController.getAll)
leaveTypeMasterRouter.get('/:id', leaveTypeMasterController.findOneById)
leaveTypeMasterRouter.post('/', leaveTypeMasterController.create)
leaveTypeMasterRouter.patch('/:id', leaveTypeMasterController.update)
leaveTypeMasterRouter.delete('/:id', leaveTypeMasterController.delete)

module.exports = leaveTypeMasterRouter
