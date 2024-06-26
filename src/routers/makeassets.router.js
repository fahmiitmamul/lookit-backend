const makeAssetsRouter = require('express').Router()
const makeAssetsController = require('../controllers/makeassets.controller')
const { uploadMiddleware } = require('../middleware/upload.middleware')

makeAssetsRouter.get('/', makeAssetsController.getAll)
makeAssetsRouter.get('/:id', makeAssetsController.findOneById)
makeAssetsRouter.post(
    '/',
    uploadMiddleware('picture'),
    makeAssetsController.create
)
makeAssetsRouter.post('/bulk', makeAssetsController.bulkCreate)
makeAssetsRouter.patch(
    '/:id',
    uploadMiddleware('picture'),
    makeAssetsController.update
)
makeAssetsRouter.delete('/:id', makeAssetsController.delete)

module.exports = makeAssetsRouter
