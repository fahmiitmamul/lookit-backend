const districtRouter = require('express').Router()
const districtController = require('../controllers/district.controller')
const authMiddleware = require('../middleware/auth.middleware')

districtRouter.get('/', districtController.getAll)
districtRouter.get('/:id', districtController.findOneById)
districtRouter.post('/', authMiddleware, districtController.create)
districtRouter.patch('/:id', authMiddleware, districtController.update)
districtRouter.delete('/:id', authMiddleware, districtController.delete)

module.exports = districtRouter
