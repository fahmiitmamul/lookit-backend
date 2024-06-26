const divisionRouter = require('express').Router()
const divisionController = require('../controllers/division.controller')

divisionRouter.get('/', divisionController.getAll)
divisionRouter.get('/:id', divisionController.findOneById)
divisionRouter.post('/', divisionController.create)
divisionRouter.patch('/:id', divisionController.update)
divisionRouter.delete('/:id', divisionController.delete)

module.exports = divisionRouter
