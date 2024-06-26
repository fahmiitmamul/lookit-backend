const outgoingGuaranteeRouter = require('express').Router()
const outgoingGuaranteeController = require('../controllers/outgoingguarantee.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

outgoingGuaranteeRouter.get('/', outgoingGuaranteeController.getAll)
outgoingGuaranteeRouter.get('/:id', outgoingGuaranteeController.findOneById)
outgoingGuaranteeRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    outgoingGuaranteeController.create
)
outgoingGuaranteeRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    outgoingGuaranteeController.update
)
outgoingGuaranteeRouter.delete('/:id', outgoingGuaranteeController.delete)

module.exports = outgoingGuaranteeRouter
