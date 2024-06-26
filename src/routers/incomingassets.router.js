const incomingAssetsRouter = require('express').Router()
const incomingAssetsController = require('../controllers/incomingassets.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

incomingAssetsRouter.get('/', incomingAssetsController.getAll)
incomingAssetsRouter.get(
    '/employee',
    incomingAssetsController.getAllEmployeeIncomingAssets
)
incomingAssetsRouter.get('/:id', incomingAssetsController.findOneById)
incomingAssetsRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    incomingAssetsController.create
)
incomingAssetsRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    incomingAssetsController.update
)
incomingAssetsRouter.delete('/:id', incomingAssetsController.delete)

module.exports = incomingAssetsRouter
