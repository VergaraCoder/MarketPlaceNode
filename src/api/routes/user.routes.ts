import { Router } from 'express'
import { UserController } from '../controllers/user.controller.ts'
import { ValidateDtoCreateUser } from '../middlewares/users/validateDto.createUser.ts'
import { ValidateDtoUpdateUser } from '../middlewares/users/validateDto.updateUser.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'

const routes: Router = Router()

routes.post('/users', ValidateDtoCreateUser, UserController.create)
routes.get('/users', VerifyToken.validateToken, UserController.allUsers)
routes.get('/user/:idUser')
routes.patch('/user/:idUser', ValidateDtoUpdateUser)
routes.delete('/user/:idUser')

export default routes
