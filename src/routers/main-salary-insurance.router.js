const mainSalaryInsuraceRouter = require('express').Router()
const mainSalaryInsuranceController = require('../controllers/main-salary-insurance.controller')

mainSalaryInsuraceRouter.get('/', mainSalaryInsuranceController.getAll)
mainSalaryInsuraceRouter.get('/:id', mainSalaryInsuranceController.findOneById)
mainSalaryInsuraceRouter.get(
    '/employee/:id',
    mainSalaryInsuranceController.findOneByEmployeeId
)
mainSalaryInsuraceRouter.post('/', mainSalaryInsuranceController.create)
mainSalaryInsuraceRouter.patch('/:id', mainSalaryInsuranceController.update)
mainSalaryInsuraceRouter.delete('/:id', mainSalaryInsuranceController.delete)

module.exports = mainSalaryInsuraceRouter
