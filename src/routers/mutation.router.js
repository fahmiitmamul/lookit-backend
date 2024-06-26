const mutationRouter = require('express').Router()
const mutationController = require('../controllers/mutation.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

mutationRouter.get('/', mutationController.getAll)
mutationRouter.get('/location', mutationController.getLocation)
mutationRouter.get('/location/employee', mutationController.getEmployeeLocation)
mutationRouter.get('/position', mutationController.getPosition)
mutationRouter.get('/position/employee', mutationController.getEmployeePosition)
mutationRouter.get('/:id', mutationController.findOneById)
mutationRouter.post(
    '/create-location',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    mutationController.createLocation
)
mutationRouter.post(
    '/create-position',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    mutationController.createPosition
)
mutationRouter.patch(
    '/update-location/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    mutationController.updateLocation
)
mutationRouter.patch(
    '/update-position/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    mutationController.updatePosition
)
mutationRouter.delete('/:id', mutationController.delete)

module.exports = mutationRouter
