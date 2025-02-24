import { Router } from 'express'
import { ScheduleController } from '../controllers/schedule.controller.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'
import { ValidateDtoCreateSchedule } from '../middlewares/schedule/validateDto.createSchedule.ts'
import { ValidateDtoUpdateSchedule } from '../middlewares/schedule/validateDto.updateSchedule.ts'

const routes: Router = Router()

/**
 * @swagger
 * tags:
 *      name: Schedules
 *      description: The schedules endpoints
 */

/**
 * @swagger
 * /api/schedule:
 *   post:
 *     summary: This endpoint is for create a new schedule of one service or multiple schedules
 *     description:  Returns the schedule or schedules created
 *     tags:
 *       - Schedules
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
  '/',
  VerifyToken.validateToken,
  ValidateDtoCreateSchedule,
  ScheduleController.createSchedule,
)

/**
 * @swagger
 * /api/schedule:
 *   get:
 *     summary: This endpoint is for get all schedules
 *     description:  Returns the schedules
 *     tags:
 *       - Schedules
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
  '/',
  VerifyToken.validateToken,
  ScheduleController.findAllSchedule,
)

/**
 * @swagger
 * /api/schedule/:idSchedule:
 *   get:
 *     summary: This endpoint is for get one schedule based in idService
 *     description:  Returns one schedule
 *     tags:
 *       - Schedules
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
  '/:idSchedule',
  VerifyToken.validateToken,
  ScheduleController.findOneSchedule,
)

/**
 * @swagger
 * /api/schedule/:idSchedule:
 *   patch:
 *     summary: This endpoint is for update one schedule based in idSchedule
 *     description:  Returns the boolean
 *     tags:
 *       - Schedules
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
  '/:idSchedule',
  VerifyToken.validateToken,
  ValidateDtoUpdateSchedule,
  ScheduleController.updateSchedule,
)

/**
 * @swagger
 * /api/schedule/:idSchedule:
 *   delete:
 *     summary: This endpoint is for delete one role based in idSchedule
 *     description:  Returns boolean or negative response for indicated what happend
 *     tags:
 *       - Schedules
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
  '/:idSchedule',
  VerifyToken.validateToken,
  ScheduleController.deleteSchedule,
)

export default routes
