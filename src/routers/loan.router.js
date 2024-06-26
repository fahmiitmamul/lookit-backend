const loanRouter = require('express').Router()
const loanController = require('../controllers/loan.controller')

loanRouter.get('/', loanController.getAll)
loanRouter.get('/:id', loanController.findOneById)
loanRouter.post('/', loanController.create)
loanRouter.patch('/:id', loanController.update)
loanRouter.delete('/:id', loanController.delete)

module.exports = loanRouter
