const masterSalaryAdditionRouter = require('express').Router()
const masterSalaryAdditionController = require('../controllers/master-salary-addition.controller')
const authMiddleware = require('../middleware/auth.middleware')

masterSalaryAdditionRouter.get('/', masterSalaryAdditionController.getAll)
masterSalaryAdditionRouter.get(
    '/:id',
    masterSalaryAdditionController.findOneById
)
masterSalaryAdditionRouter.post(
    '/',
    authMiddleware,
    masterSalaryAdditionController.create
)
masterSalaryAdditionRouter.patch(
    '/:id',
    authMiddleware,
    masterSalaryAdditionController.update
)
masterSalaryAdditionRouter.delete(
    '/:id',
    authMiddleware,
    masterSalaryAdditionController.delete
)

module.exports = masterSalaryAdditionRouter
