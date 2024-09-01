const mainSalaryRouter = require('express').Router()
const mainSalaryController = require('../controllers/main-salary.controller')

mainSalaryRouter.get('/', mainSalaryController.getAll)
mainSalaryRouter.get('/:id', mainSalaryController.findOneById)
mainSalaryRouter.get('/employee/:id', mainSalaryController.findOneByEmployeeId)
mainSalaryRouter.post('/', mainSalaryController.create)
mainSalaryRouter.patch('/:id', mainSalaryController.update)
mainSalaryRouter.delete('/:id', mainSalaryController.delete)

module.exports = mainSalaryRouter
