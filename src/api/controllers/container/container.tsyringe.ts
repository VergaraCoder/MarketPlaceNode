import { container } from 'tsyringe'
import { UserController } from '../user.controller'

container.registerSingleton<UserController>(UserController)
