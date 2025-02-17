import { Router } from 'express'
import { ScheduleController } from '../controllers/schedule.controller.ts'

const routes: Router = Router()

routes.post('/schedule', ScheduleController.createSchedule)
routes.get('/schedule/:idService', ScheduleController.findAllSchedule)
routes.get('/schedule/:idSchedule', ScheduleController.findOneSchedule)
routes.patch('/schedule/:idSchedule', ScheduleController.updateSchedule)
routes.delete('/schedule/:idSchedule', ScheduleController.deleteSchedule)

export default routes
