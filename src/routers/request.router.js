const requestRouter = require('express').Router()
const requestController = require('../controllers/request.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

requestRouter.get('/', requestController.getAll)
requestRouter.get('/pending', requestController.getPending)
requestRouter.get('/pending/employee', requestController.getEmployeePending)
requestRouter.get('/approved', requestController.getApproved)
requestRouter.get('/approved/employee', requestController.getEmployeeApproved)
requestRouter.get('/rejected', requestController.getRejected)
requestRouter.get('/rejected/employee', requestController.getEmployeeRejected)
requestRouter.get('/:id', requestController.findOneById)
requestRouter.patch('/status', requestController.updateStatus)
requestRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    requestController.create
)
requestRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    requestController.update
)
requestRouter.delete('/:id', requestController.delete)

module.exports = requestRouter
