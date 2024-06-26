const announcementRouter = require('express').Router()
const announcementController = require('../controllers/announcement.controller')
const { uploadMiddleware } = require('../middleware/upload.middleware')

announcementRouter.get('/', announcementController.getAll)
announcementRouter.get('/:id', announcementController.findOneById)
announcementRouter.post(
    '/',
    uploadMiddleware('file'),
    announcementController.create
)
announcementRouter.patch(
    '/:id',
    uploadMiddleware('file'),
    announcementController.update
)
announcementRouter.delete('/:id', announcementController.delete)

module.exports = announcementRouter
