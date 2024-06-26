const bpjsRouter = require('express').Router()
const bpjsController = require('../controllers/bpjs.controller')
const authMiddleware = require('../middleware/auth.middleware')

bpjsRouter.get('/', bpjsController.getAll)
bpjsRouter.get('/:id', bpjsController.findOneById)
bpjsRouter.post('/', authMiddleware, bpjsController.create)
bpjsRouter.patch('/:id', authMiddleware, bpjsController.update)
bpjsRouter.delete('/:id', authMiddleware, bpjsController.delete)

module.exports = bpjsRouter
