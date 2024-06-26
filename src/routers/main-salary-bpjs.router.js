const mainSalaryBpjsRouter = require('express').Router()
const mainSalaryBpjsController = require('../controllers/main-salary-bpjs.controller')

mainSalaryBpjsRouter.get('/', mainSalaryBpjsController.getAll)
mainSalaryBpjsRouter.get('/:id', mainSalaryBpjsController.findOneById)
mainSalaryBpjsRouter.get(
    '/employee/:id',
    mainSalaryBpjsController.findOneByEmployeeId
)
mainSalaryBpjsRouter.post('/', mainSalaryBpjsController.create)
mainSalaryBpjsRouter.patch('/:id', mainSalaryBpjsController.update)
mainSalaryBpjsRouter.delete('/:id', mainSalaryBpjsController.delete)

module.exports = mainSalaryBpjsRouter
