const companyRouter = require('express').Router()
const companyController = require('../controllers/company.controller')
const { uploadMiddleware } = require('../middleware/upload.middleware')

companyRouter.get('/', companyController.getAll)
companyRouter.get('/:id', companyController.findOneById)
companyRouter.post('/', uploadMiddleware('logo'), companyController.create)
companyRouter.patch('/:id', uploadMiddleware('logo'), companyController.update)
companyRouter.delete('/:id', companyController.delete)

module.exports = companyRouter
