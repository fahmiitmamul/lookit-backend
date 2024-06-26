const overtimeRouter = require('express').Router()
const overtimeController = require('../controllers/overtime.controller')
const { uploadMiddleware } = require('../middleware/upload.middleware')

overtimeRouter.get('/', overtimeController.getAll)
overtimeRouter.get('/send', overtimeController.getSend)
overtimeRouter.get('/data', overtimeController.getData)
overtimeRouter.get('/approved', overtimeController.getApproved)
overtimeRouter.get('/declined', overtimeController.getDeclined)
overtimeRouter.get('/:id', overtimeController.findOneById)
overtimeRouter.post('/', uploadMiddleware('file'), overtimeController.create)
overtimeRouter.patch('/status', overtimeController.updateStatus)
overtimeRouter.patch(
    '/:id',
    uploadMiddleware('file'),
    overtimeController.update
)
overtimeRouter.delete('/:id', overtimeController.delete)

module.exports = overtimeRouter
