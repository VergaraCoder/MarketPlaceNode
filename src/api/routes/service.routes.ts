import { Router } from 'express'
import { ServiceController } from '../controllers/service.controller.ts'
import { ValidateDtoCreateService } from '../middlewares/service/validateDto.createService.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'
import { ValidateDtoUpdateUser } from '..//middlewares/users/validateDto.updateUser.ts'
import { ScheduleController } from '../../api/controllers/schedule.controller.ts'
import { ValidateDtoUpdateSchedule } from '../../api/middlewares/schedule/validateDto.updateSchedule.ts'
import { ValidateDtoCreateSchedule } from '../../api/middlewares/schedule/validateDto.createSchedule.ts'

const routes: Router = Router()


/**
 * @swagger
 * tags:
 *      name: Services
 *      description: The service endpoints
 */

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: This endpoint is for create a new service of one service or multiple service
 *     description:  Returns the service or service created
 *     tags:
 *       - Services
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: return service that was created
 *         content:
 *           application/json:
 *             examples:
 *               serviceCreate:
 *                 $ref: "#/components/examples/ServiceExample"
 *       400:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  serviceCreateError:
 *                      $ref: '#/components/examples/ServiceExample400'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  serviceError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.post(
  '/',
  VerifyToken.validateToken,
  ValidateDtoCreateService,
  ServiceController.createService,
)

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: This endpoint is for get all services
 *     description:  Returns the services
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return all services
 *         content:
 *           application/json:
 *             examples:
 *               allServices:
 *                 $ref: '#/components/examples/AllServices'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  serviceDeleteError:
 *                      $ref: '#/components/examples/ServiceExample404All'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  serviceError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get(
  '/',
  VerifyToken.validateToken,
  ValidateDtoUpdateUser,
  ServiceController.findAllService,
)

/**
 * @swagger
 * /api/services/:idService:
 *   get:
 *     summary: This endpoint is for get one service based in idService
 *     description:  Returns one Service
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return one service
 *         content:
 *           application/json:
 *             examples:
 *               oneServices:
 *                 $ref: '#/components/examples/ServiceExample'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  serviceDeleteError:
 *                      $ref: '#/components/examples/ServiceExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  serviceError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get(
  '/:idService',
  VerifyToken.validateToken,
  ServiceController.findOneService,
)

/**
 * @swagger
 * /api/services/:idService:
 *   patch:
 *     summary: This endpoint is for update one schedule based in idService
 *     description:  Returns the boolean
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return boolean
 *         content:
 *           application/json:
 *             examples:
 *               patchService:
 *                 $ref: '#/components/examples/ExamplePatch'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  serviceDeleteError:
 *                      $ref: '#/components/examples/ServiceExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  serviceError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.patch(
  '/:idService',
  VerifyToken.validateToken,
  ServiceController.updateService,
)

/**
 * @swagger
 * /api/services/:idService:
 *   delete:
 *     summary: This endpoint is for delete one role based in idService
 *     description:  Returns boolean or negative response for indicated what happend
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return boolean true
 *         content:
 *           application/json:
 *             examples:
 *               patchService:
 *                 $ref: '#/components/examples/ExampleDelete'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  serviceDeleteError:
 *                      $ref: '#/components/examples/ServiceExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  serviceError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.delete(
  '/:idService',
  VerifyToken.validateToken,
  ServiceController.deleteService,
)



/**
 * @swagger
 * /api/services/:idService/schedules:
 *   post:
 *     summary: This endpoint is for create a new schedule of one service or multiple schedules
 *     description:  Returns the schedule or schedules created
 *     tags:
 *       - Services
 *     requestBody:
 *       required:  true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Schedule'
 *     responses:
 *       200:
 *         description: return schedules that was created
 *         content:
 *           application/json:
 *             examples:
 *               scheduleCreate:
 *                 $ref: '#/components/examples/SchedulesExample'
 *       400:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleCreateError:
 *                      $ref: '#/components/examples/ServiceExample400'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.post(
  '/:idService/schedules',
  VerifyToken.validateToken,
  ValidateDtoCreateSchedule,
  ScheduleController.createSchedule,
);

/**
 * @swagger
 * /api/services/:idService/schedules:
 *   get:
 *     summary: This endpoint is for get all schedules
 *     description:  Returns the schedules
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return all schedules
 *         content:
 *           application/json:
 *             examples:
 *                schedulesAll:
 *                  $ref: '#/components/examples/ScheduleExampleAll'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleAllError:
 *                      $ref: '#/components/examples/ScheduleExample404All'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get(
  '/:idService/schedules',
  VerifyToken.validateToken,
  ScheduleController.findAllSchedule,
);

/**
 * @swagger
 * /api/services/:idService/schedules/idSchedule:
 *   get:
 *     summary: This endpoint is for get one schedule based in idService
 *     description:  Returns one schedule
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return one schedule
 *         content:
 *           application/json:
 *             examples:
 *               oneSchedule:
 *                 $ref: '#/components/examples/SchedulesExample'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleOneError:
 *                      $ref: '#/components/examples/ScheduleExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get(
  '/:idService/schedules/idSchedule',
  VerifyToken.validateToken,
  ScheduleController.findOneSchedule,
);

/**
 * @swagger
 * /api/services/:idService/schedules/:idSchedule:
 *   patch:
 *     summary: This endpoint is for update one schedule based in idSchedule
 *     description:  Returns the boolean
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return boolean
 *         content:
 *           application/json:
 *             examples:
 *               oneSchedule:
 *                 $ref: '#/components/examples/ExamplePatch'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleOneError:
 *                      $ref: '#/components/examples/ScheduleExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.patch(
  '/:idService/schedules/:idSchedule',
  VerifyToken.validateToken,
  ValidateDtoUpdateSchedule,
  ScheduleController.updateSchedule,
);

/**
 * @swagger
 * /api/services/:idService/schedules/:idSchedule:
 *   delete:
 *     summary: This endpoint is for delete one role based in idSchedule
 *     description:  Returns boolean or negative response for indicated what happend
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: return boolean true
 *         content:
 *           application/json:
 *             examples:
 *               oneSchedule:
 *                 $ref: '#/components/examples/ExampleDelete'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleOneError:
 *                      $ref: '#/components/examples/ScheduleExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.delete(
  '/:idService/schedules/:idSchedule',
  VerifyToken.validateToken,
  ScheduleController.deleteSchedule,
);

export default routes
