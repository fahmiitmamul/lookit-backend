const mainSalaryAdditionRouter = require('express').Router()
const mainSalaryAdditionController = require('../controllers/main-salary-addition.controller')

mainSalaryAdditionRouter.get('/', mainSalaryAdditionController.getAll)
mainSalaryAdditionRouter.get('/:id', mainSalaryAdditionController.findOneById)
mainSalaryAdditionRouter.get(
    '/employee/:id',
    mainSalaryAdditionController.findOneByEmployeeId
)
mainSalaryAdditionRouter.post('/', mainSalaryAdditionController.create)
mainSalaryAdditionRouter.patch('/:id', mainSalaryAdditionController.update)
mainSalaryAdditionRouter.delete('/:id', mainSalaryAdditionController.delete)

module.exports = mainSalaryAdditionRouter
