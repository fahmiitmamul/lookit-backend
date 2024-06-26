const mainSalaryDeductionRouter = require('express').Router()
const mainSalaryDeductionController = require('../controllers/main-salary-deduction.controller')

mainSalaryDeductionRouter.get('/', mainSalaryDeductionController.getAll)
mainSalaryDeductionRouter.get('/:id', mainSalaryDeductionController.findOneById)
mainSalaryDeductionRouter.get(
    '/employee/:id',
    mainSalaryDeductionController.findOneByEmployeeId
)
mainSalaryDeductionRouter.post('/', mainSalaryDeductionController.create)
mainSalaryDeductionRouter.patch('/:id', mainSalaryDeductionController.update)
mainSalaryDeductionRouter.delete('/:id', mainSalaryDeductionController.delete)

module.exports = mainSalaryDeductionRouter
