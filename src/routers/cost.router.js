const costRouter = require('express').Router()
const costController = require('../controllers/cost.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

costRouter.get('/', costController.getAll)
costRouter.get('/:id', costController.findOneById)
costRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    costController.create
)
costRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    costController.update
)
costRouter.delete('/:id', costController.delete)

module.exports = costRouter
