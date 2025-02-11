import { Router } from 'express'
import { RolesController } from '../controllers/roles.controller.ts'

const routes: Router = Router()

routes.post('/roles', RolesController.createRoles)
routes.get('/roles', RolesController.findAllRoles)
routes.get('/roles/:idRoles', RolesController.findOneRoles)
routes.patch('/roles/:idRoles', RolesController.updateRoles)
routes.delete('/roles/:idRoles', RolesController.deleteRoles)

export default routes
