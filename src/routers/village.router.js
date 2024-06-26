const villageRouter = require('express').Router()
const villageController = require('../controllers/village.controller')
const authMiddleware = require('../middleware/auth.middleware')

villageRouter.get('/', villageController.getAll)
villageRouter.get('/:id', villageController.findOneById)
villageRouter.post('/', authMiddleware, villageController.create)
villageRouter.patch('/:id', authMiddleware, villageController.update)
villageRouter.delete('/:id', authMiddleware, villageController.delete)

module.exports = villageRouter
