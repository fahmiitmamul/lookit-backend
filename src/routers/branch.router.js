const branchRouter = require('express').Router()
const branchController = require('../controllers/branch.controller')

branchRouter.get('/', branchController.getAll)
branchRouter.get('/employee/:id', branchController.getEmployeeBranch)
branchRouter.get('/:id', branchController.findOneById)
branchRouter.post('/', branchController.create)
branchRouter.patch('/:id', branchController.update)
branchRouter.delete('/:id', branchController.delete)

module.exports = branchRouter
