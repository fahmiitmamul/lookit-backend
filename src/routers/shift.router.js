const shiftRouter = require('express').Router()
const shiftController = require('../controllers/shift.controller')

shiftRouter.get('/', shiftController.getAll)
shiftRouter.get('/all', shiftController.getAllIncludeHoliday)
shiftRouter.get('/one', shiftController.findOneByName)
shiftRouter.get('/:id', shiftController.findOneById)
shiftRouter.post('/', shiftController.create)
shiftRouter.patch('/:id', shiftController.update)
shiftRouter.delete('/:id', shiftController.delete)

module.exports = shiftRouter
