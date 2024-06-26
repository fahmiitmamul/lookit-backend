const taskRouter = require('express').Router()
const taskController = require('../controllers/task.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

taskRouter.get('/', taskController.getAll)
taskRouter.get('/process', taskController.getProcessTasks)
taskRouter.get('/process/employee', taskController.getEmployeeProcessTasks)
taskRouter.get('/finished', taskController.getFinishedTasks)
taskRouter.get('/finished/employee', taskController.getEmployeeFinishedTasks)
taskRouter.get('/canceled', taskController.getCanceledTasks)
taskRouter.get('/canceled/employee', taskController.getEmployeeCanceledTasks)
taskRouter.get('/:id', taskController.findOneById)
taskRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'files',
            maxCount: 10,
        },
        {
            name: 'proof_of_assignment',
            maxCount: 1,
        },
    ]),
    taskController.create
)
taskRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 10,
        },
        {
            name: 'proof_of_assignment',
            maxCount: 1,
        },
    ]),
    taskController.update
)
taskRouter.delete('/:id', taskController.delete)

module.exports = taskRouter
