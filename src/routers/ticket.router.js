const ticketRouter = require('express').Router()
const ticketController = require('../controllers/ticket.controller')
const { uploadDocuments } = require('../middleware/upload.middleware')

ticketRouter.get('/', ticketController.getAll)
ticketRouter.get('/open', ticketController.getOpenTicket)
ticketRouter.get('/closed', ticketController.getClosedTicket)
ticketRouter.get('/pending', ticketController.getPendingTicket)
ticketRouter.get('/:id', ticketController.findOneById)
ticketRouter.post(
    '/',
    uploadDocuments.fields([
        {
            name: 'file',
            maxCount: 1,
        },
    ]),
    ticketController.create
)
ticketRouter.patch(
    '/:id',
    uploadDocuments.fields([
        {
            name: 'file_action',
            maxCount: 1,
        },
    ]),
    ticketController.update
)
ticketRouter.delete('/:id', ticketController.delete)

module.exports = ticketRouter
