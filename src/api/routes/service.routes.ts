import { Router } from 'express'
import { ServiceController } from '../controllers/service.controller.ts'
import { ValidateDtoCreateService } from '../middlewares/service/validateDto.createService.ts'

const routes: Router = Router()

routes.post(
  '/service',
  ValidateDtoCreateService,
  ServiceController.createService,
)
routes.get('/service', ServiceController.findAllService)
routes.get('/service/:idService', ServiceController.findOneService)
routes.patch('/service/:idService', ServiceController.updateService)
routes.delete('/service/:idService', ServiceController.deleteService)

export default routes
