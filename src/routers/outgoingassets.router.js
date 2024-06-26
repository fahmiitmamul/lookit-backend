const outgoingAssetsRouter = require('express').Router()
const outgoingAssetsController = require('../controllers/outgoingassets.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

outgoingAssetsRouter.get('/', outgoingAssetsController.getAll)
outgoingAssetsRouter.get(
    '/employee',
    outgoingAssetsController.getAllEmployeeOutgoingAssets
)
outgoingAssetsRouter.get('/:id', outgoingAssetsController.findOneById)
outgoingAssetsRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    outgoingAssetsController.create
)
outgoingAssetsRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    outgoingAssetsController.update
)
outgoingAssetsRouter.delete('/:id', outgoingAssetsController.delete)

module.exports = outgoingAssetsRouter
