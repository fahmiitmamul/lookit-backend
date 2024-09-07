const salaryRouter = require('express').Router()
const salaryController = require('../controllers/total-salary.controller')

salaryRouter.get('/', salaryController.getAll)
salaryRouter.get('/:id', salaryController.findOneById)
salaryRouter.post('/', salaryController.create)
salaryRouter.patch('/:id', salaryController.update)
salaryRouter.delete('/:id', salaryController.delete)

module.exports = salaryRouter
