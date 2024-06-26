const permissionTypeRouter = require('express').Router()
const permissionTypeController = require('../controllers/permissiontype.controller')

permissionTypeRouter.get('/', permissionTypeController.getAll)
permissionTypeRouter.get('/:id', permissionTypeController.findOneById)
permissionTypeRouter.post('/', permissionTypeController.create)
permissionTypeRouter.patch('/:id', permissionTypeController.update)
permissionTypeRouter.delete('/:id', permissionTypeController.delete)

module.exports = permissionTypeRouter
