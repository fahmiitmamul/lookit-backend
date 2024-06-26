const insuranceRouter = require('express').Router()
const insuranceController = require('../controllers/insurance.controller')

insuranceRouter.get('/', insuranceController.getAll)
insuranceRouter.get('/:id', insuranceController.findOneById)
insuranceRouter.post('/', insuranceController.create)
insuranceRouter.patch('/:id', insuranceController.update)
insuranceRouter.delete('/:id', insuranceController.delete)

module.exports = insuranceRouter
