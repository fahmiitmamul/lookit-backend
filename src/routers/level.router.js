const levelRouter = require('express').Router()
const levelController = require('../controllers/level.controller')

levelRouter.get('/', levelController.getAll)
levelRouter.get('/:id', levelController.findOneById)
levelRouter.post('/', levelController.create)
levelRouter.patch('/:id', levelController.update)
levelRouter.delete('/:id', levelController.delete)

module.exports = levelRouter
