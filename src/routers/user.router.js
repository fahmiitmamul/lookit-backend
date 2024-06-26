const userRouter = require('express').Router()
const userController = require('../controllers/user.controller')

userRouter.get('/', userController.findOne)
userRouter.post('/', userController.create)
userRouter.patch('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

module.exports = userRouter
