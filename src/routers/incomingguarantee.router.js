const incomingGuaranteeRouter = require('express').Router()
const incomingGuaranteeController = require('../controllers/incomingguarantee.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

incomingGuaranteeRouter.get('/', incomingGuaranteeController.getAll)
incomingGuaranteeRouter.get('/:id', incomingGuaranteeController.findOneById)
incomingGuaranteeRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    incomingGuaranteeController.create
)
incomingGuaranteeRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    incomingGuaranteeController.update
)
incomingGuaranteeRouter.delete('/:id', incomingGuaranteeController.delete)

module.exports = incomingGuaranteeRouter
