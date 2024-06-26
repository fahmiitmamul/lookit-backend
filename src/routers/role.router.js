const roleRouter = require('express').Router()
const roleController = require('../controllers/role.controller')
const authMiddleware = require('../middleware/auth.middleware')

roleRouter.get('/', roleController.getAll)
roleRouter.get('/:id', roleController.findOneById)
roleRouter.post('/', authMiddleware, roleController.create)
roleRouter.patch('/:id', authMiddleware, roleController.update)
roleRouter.delete('/:id', authMiddleware, roleController.delete)

module.exports = roleRouter
