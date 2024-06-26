const vaccineRouter = require('express').Router()
const vaccineController = require('../controllers/vaccine.controller')

vaccineRouter.get('/', vaccineController.getAll)
vaccineRouter.get('/:id', vaccineController.findOneById)
vaccineRouter.post('/', vaccineController.create)
vaccineRouter.patch('/:id', vaccineController.update)
vaccineRouter.delete('/:id', vaccineController.delete)

module.exports = vaccineRouter
