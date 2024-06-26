const permissionsRouter = require('express').Router()
const permissionsController = require('../controllers/permissions.controller')

permissionsRouter.get('/', permissionsController.getAll)
permissionsRouter.get('/:name', permissionsController.findOneByName)
permissionsRouter.post('/', permissionsController.create)
permissionsRouter.patch('/:id', permissionsController.update)
permissionsRouter.delete('/:name', permissionsController.delete)

module.exports = permissionsRouter
