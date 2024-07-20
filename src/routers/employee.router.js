const employeeRouter = require('express').Router()
const employeeController = require('../controllers/employee.controller')
const { uploadMiddleware } = require('../middleware/upload.middleware')

employeeRouter.get('/', employeeController.getAll)
employeeRouter.get('/active', employeeController.getActiveEmployee)
employeeRouter.get('/non-active', employeeController.getNonActiveEmployee)
employeeRouter.get('/nik/:id', employeeController.findOneByNik)
employeeRouter.get('/branch', employeeController.getBranch)
employeeRouter.get('/presence/:id', employeeController.getPresence)
employeeRouter.post(
    '/',
    uploadMiddleware('profile_photo'),
    employeeController.create
)
employeeRouter.post('/bulk', employeeController.bulkCreate)
employeeRouter.patch('/leave-type/:id', employeeController.updateLeaveType)
employeeRouter.patch(
    '/:id',
    uploadMiddleware('profile_photo'),
    employeeController.update
)
employeeRouter.get('/:id', employeeController.findOneById)
employeeRouter.delete('/:id', employeeController.delete)

module.exports = employeeRouter
