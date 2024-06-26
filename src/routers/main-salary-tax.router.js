const mainSalaryTaxRouter = require('express').Router()
const mainSalaryTaxController = require('../controllers/main-salary-tax.controller')

mainSalaryTaxRouter.get('/', mainSalaryTaxController.getAll)
mainSalaryTaxRouter.get('/:id', mainSalaryTaxController.findOneById)
mainSalaryTaxRouter.get(
    '/employee/:id',
    mainSalaryTaxController.findOneByEmployeeId
)
mainSalaryTaxRouter.post('/', mainSalaryTaxController.create)
mainSalaryTaxRouter.patch('/:id', mainSalaryTaxController.update)
mainSalaryTaxRouter.delete('/:id', mainSalaryTaxController.delete)

module.exports = mainSalaryTaxRouter
