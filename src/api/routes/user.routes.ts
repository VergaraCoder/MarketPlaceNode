import { Router } from 'express'
import { UserController } from '../controllers/user.controller.ts'
import { ValidateDtoCreateUser } from '../middlewares/users/validateDto.createUser.ts'
import { ValidateDtoUpdateUser } from '../middlewares/users/validateDto.updateUser.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'

const routes: Router = Router()
/**
 * @swagger
 * tags:
 *      name: Users
 *      description: The users endpoints
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: This endpoint is for creating one or multiple users
 *     description: Returns the created user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Returns the created user
 *         content:
 *           application/json:
 *             examples:
 *               userExample:
 *                 $ref: '#/components/examples/UserExample'
 *       400:
 *         description: return error
 *         content:
 *           application/json:
 *             examples:
 *               userErrorData:
 *                 $ref: '#/components/examples/UserExample400'
 *       409:
 *         description: return error
 *         content:
 *           application/json:
 *             examples:
 *               userErrorRoleReference:
 *                 $ref: '#/components/examples/UserExample409Role'
 *               userErrorEmail:
 *                 $ref: '#/components/examples/UserExample409Email'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  userError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.post(
  '/users',
  ValidateDtoCreateUser, // validate user data
  UserController.create, // call the controller and service
)

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: This endpoint is for get all users of the database
 *     description:  Returns all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             examples:
 *               usersExample:
 *                 $ref: '#/components/examples/UsersExample'
 *       404:
 *         description: return error 404
 *         content:
 *           application/json:
 *             examples:
 *               userDelete:
 *                 $ref: '#/components/examples/UserExample404All'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  userError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get('/api/users', VerifyToken.validateToken, UserController.allUsers)

/**
 * @swagger
 * /api/users/:idUser:
 *   get:
 *     summary: This endpoint is for return one user
 *     description:  Returns one user based inthe idUser
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: return user that match with idUser
 *         content:
 *          application/json:
 *            examples:
 *               userExample:
 *                 $ref: '#/components/examples/UserExample'
 *       404:
 *         description: return error 404
 *         content:
 *          application/json:
 *            examples:
 *               userErrorExample:
 *                 $ref: '#/components/examples/UserExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  userError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get(
  '/user/:idUser',
  VerifyToken.validateToken, // middleware validate tokens in headers
  UserController.getOneUser, // controller to return one user
)

/**
 * @swagger
 * /api/users/:idUser:
 *   patch:
 *     summary: This endpoint is for create one or multiple users
 *     description: return a boolean indicated that the user was created
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: return a boolean indicated that the user was updated
 *         content:
 *          application/json:
 *            examples:
 *               userExample:
 *                 $ref: '#/components/examples/ExamplePatch'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  userDeleteError:
 *                      $ref: '#/components/examples/UserExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  userError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.patch(
  '/user/:idUser',
  VerifyToken.validateToken, // Validate tokens
  ValidateDtoUpdateUser, // Validate DTO
  UserController.update, // controller to update user
)

/**
 * @swagger
 * /api/users/:idUser:
 *   delete:
 *     summary: This endpoint is for delete one user
 *     description: Return boolean indacted that the user was deleted correctly
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: return boolen
 *         content:
 *            application/json:
 *              examples:
 *                  userDelete:
 *                      $ref: '#/components/examples/ExampleDelete'
 *       404:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  userDeleteError:
 *                      $ref: '#/components/examples/UserExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  userDeleteError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.delete(
  '/users/:idUser',
  VerifyToken.validateToken, // Validate tokens
  UserController.delete,    // controller to delete user
)


export default routes
