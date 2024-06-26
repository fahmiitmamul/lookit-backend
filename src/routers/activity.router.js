const activityRouter = require('express').Router()
const activityController = require('../controllers/activity.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

activityRouter.get('/', activityController.getAll)
activityRouter.get('/:id', activityController.findOneById)
activityRouter.get('/employee', activityController.getAllEmployeeActivity)
activityRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    activityController.create
)
activityRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    activityController.update
)
activityRouter.delete('/:id', activityController.delete)

module.exports = activityRouter
