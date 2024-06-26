const regencyRouter = require('express').Router()
const regencyController = require('../controllers/regency.controller')
const authMiddleware = require('../middleware/auth.middleware')

regencyRouter.get('/', regencyController.getAll)
regencyRouter.get('/:id', regencyController.findOneById)
regencyRouter.post('/', authMiddleware, regencyController.create)
regencyRouter.patch('/:id', authMiddleware, regencyController.update)
regencyRouter.delete('/:id', authMiddleware, regencyController.delete)

module.exports = regencyRouter
