const bankRouter = require('express').Router()
const bankController = require('../controllers/bank.controller')
const authMiddleware = require('../middleware/auth.middleware')

bankRouter.get('/', bankController.getAll)
bankRouter.get('/:id', bankController.findOneById)
bankRouter.post('/', authMiddleware, bankController.create)
bankRouter.patch('/:id', authMiddleware, bankController.update)
bankRouter.delete('/:id', authMiddleware, bankController.delete)

module.exports = bankRouter
