const masterSalaryAdditionRouter = require('express').Router()
const masterSalaryDeductionController = require('../controllers/master-salary-deduction.controller')
const authMiddleware = require('../middleware/auth.middleware')

masterSalaryAdditionRouter.get('/', masterSalaryDeductionController.getAll)
masterSalaryAdditionRouter.get(
    '/:id',
    masterSalaryDeductionController.findOneById
)
masterSalaryAdditionRouter.post(
    '/',
    authMiddleware,
    masterSalaryDeductionController.create
)
masterSalaryAdditionRouter.patch(
    '/:id',
    authMiddleware,
    masterSalaryDeductionController.update
)
masterSalaryAdditionRouter.delete(
    '/:id',
    authMiddleware,
    masterSalaryDeductionController.delete
)

module.exports = masterSalaryAdditionRouter
