const masterSalaryTaxRouter = require('express').Router()
const masterSalaryTaxController = require('../controllers/master-salary-tax.controller')

masterSalaryTaxRouter.get('/', masterSalaryTaxController.getAll)
masterSalaryTaxRouter.get('/:id', masterSalaryTaxController.findOneById)
masterSalaryTaxRouter.post('/', masterSalaryTaxController.create)
masterSalaryTaxRouter.patch('/:id', masterSalaryTaxController.update)
masterSalaryTaxRouter.delete('/:id', masterSalaryTaxController.delete)

module.exports = masterSalaryTaxRouter
