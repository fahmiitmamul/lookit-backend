const provinceRouter = require('express').Router()
const provinceController = require('../controllers/province.controller')

provinceRouter.get('/', provinceController.getAll)
provinceRouter.get('/:id', provinceController.findOneById)
provinceRouter.post('/', provinceController.create)
provinceRouter.patch('/:id', provinceController.update)
provinceRouter.delete('/:id', provinceController.delete)

module.exports = provinceRouter
