const guaranteeRouter = require('express').Router()
const guaranteeController = require('../controllers/guarantee.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

guaranteeRouter.get('/', guaranteeController.getAll)
guaranteeRouter.get('/:id', guaranteeController.findOneById)
guaranteeRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    guaranteeController.create
)
guaranteeRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    guaranteeController.update
)
guaranteeRouter.delete('/:id', guaranteeController.delete)

module.exports = guaranteeRouter
