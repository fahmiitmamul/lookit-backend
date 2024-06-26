const kpiRouter = require('express').Router()
const kpiController = require('../controllers/kpi-controller.js')

kpiRouter.get('/', kpiController.getAll)
kpiRouter.get('/:id', kpiController.findOneById)
kpiRouter.post('/', kpiController.create)
kpiRouter.patch('/:id', kpiController.update)
kpiRouter.delete('/:id', kpiController.delete)

module.exports = kpiRouter
