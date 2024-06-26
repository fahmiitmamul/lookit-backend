const contractRouter = require('express').Router()
const contractController = require('../controllers/contract.controller')

contractRouter.get('/', contractController.getAll)
contractRouter.get('/process', contractController.getProcess)
contractRouter.get('/finished', contractController.getFinished)
contractRouter.get('/unfinished', contractController.getUnfinished)
contractRouter.get('/:id', contractController.findOneById)
contractRouter.post('/', contractController.create)
contractRouter.patch('/:id', contractController.update)
contractRouter.delete('/:id', contractController.delete)

module.exports = contractRouter
