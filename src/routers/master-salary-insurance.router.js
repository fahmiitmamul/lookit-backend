const masterSalaryInsuranceRouter = require('express').Router()
const masterSalaryInsuranceController = require('../controllers/master-salary-insurance.controller')

masterSalaryInsuranceRouter.get('/', masterSalaryInsuranceController.getAll)
masterSalaryInsuranceRouter.get(
    '/:id',
    masterSalaryInsuranceController.findOneById
)
masterSalaryInsuranceRouter.post('/', masterSalaryInsuranceController.create)
masterSalaryInsuranceRouter.patch(
    '/:id',
    masterSalaryInsuranceController.update
)
masterSalaryInsuranceRouter.delete(
    '/:id',
    masterSalaryInsuranceController.delete
)

module.exports = masterSalaryInsuranceRouter
