const nationalHolidayRouter = require('express').Router()
const nationalHolidayController = require('../controllers/nationalholiday.controller')

nationalHolidayRouter.get('/', nationalHolidayController.getAll)
nationalHolidayRouter.get('/:id', nationalHolidayController.findOneById)
nationalHolidayRouter.post('/', nationalHolidayController.create)
nationalHolidayRouter.patch('/:id', nationalHolidayController.update)
nationalHolidayRouter.delete('/:id', nationalHolidayController.delete)

module.exports = nationalHolidayRouter
