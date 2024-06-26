const areaRouter = require('express').Router()
const areaController = require('../controllers/area.controller')

areaRouter.get('/', areaController.getAll)
areaRouter.get('/:id', areaController.findOneById)
areaRouter.post('/', areaController.create)
areaRouter.patch('/:id', areaController.update)
areaRouter.delete('/:id', areaController.delete)

module.exports = areaRouter
