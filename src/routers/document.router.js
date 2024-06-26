const documentRouter = require('express').Router()
const documentController = require('../controllers/document.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

documentRouter.get('/', documentController.getAll)
documentRouter.get('/:id', documentController.findOneById)
documentRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    documentController.create
)
documentRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    documentController.update
)
documentRouter.delete('/:id', documentController.delete)

module.exports = documentRouter
