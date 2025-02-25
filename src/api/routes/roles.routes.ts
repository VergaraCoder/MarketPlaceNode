import { Router } from 'express';
import { RolesController } from '../controllers/roles.controller.ts';
import { VerifyToken } from '../middlewares/auth/validateTokens.ts';

const routes: Router = Router();

/**
 * @swagger
 * tags:
 *      name: Roles
 *      description: The roles endpoints
 */

/**
 * @swagger
 * /api/roles:
 *   post:
 *     summary: This endpoint is for create a new role or multiple roles
 *     description:  Returns the role or roles created
 *     tags:
 *       - Roles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *
 *     responses:
 *       200:
 *         description: return roles that was created
 *         content:
 *           application/json:
 *             examples:
 *               scheduleCreate:
 *                 $ref: '#/components/examples/RoleExample'
 *       400:
 *         description: return error
 *         content:
 *            application/json:
 *              examples:
 *                  scheduleCreateError:
 *                      $ref: '#/components/examples/RoleExample400'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  roleeError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.post('/', VerifyToken.validateToken, RolesController.createRoles);

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: This endpoint is for get one product based in idProduct
 *     description:  Returns the roles
 *     tags:
 *       - Roles
 *     responses:
 *       200:
 *         description: return all roles
 *         content:
 *           application/json:
 *             examples:
 *               rolesAll:
 *                 $ref: '#/components/examples/RoleExampleAll'
 *       404:
 *         description: Return error roles not found
 *         content:
 *           application/json:
 *             examples:
 *               errorRolesNotFound:
 *                 $ref: '#/components/examples/RoleExample404All'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  roleeError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get('/', VerifyToken.validateToken, RolesController.findAllRoles);

/**
 * @swagger
 * /api/roles/:idRole:
 *   get:
 *     summary: This endpoint is for get one role based in idRole
 *     description:  Returns the one role based in idRole
 *     tags:
 *       - Roles
 *     responses:
 *       200:
 *         description: return one roles
 *         content:
 *           application/json:
 *             examples:
 *               rolesAll:
 *                 $ref: '#/components/examples/RoleExample'
 *       404:
 *         description: Return error roles not found
 *         content:
 *           application/json:
 *             examples:
 *               errorRolesNotFound:
 *                 $ref: '#/components/examples/RoleExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  roleeError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get('/:idRole', VerifyToken.validateToken, RolesController.findOneRoles);

/**
 * @swagger
 * /api/roles/:idRole:
 *   patch:
 *     summary: This endpoint is for update one role based in idRole
 *     description:  Returns the boolean
 *     tags:
 *       - Roles
 *     responses:
 *       200:
 *         description: return boolean true
 *         content:
 *           application/json:
 *             examples:
 *               patchRole:
 *                 $ref: '#/components/examples/ExamplePatch'
 *       404:
 *         description: Return error role not found
 *         content:
 *           application/json:
 *             examples:
 *               errorRolesNotFound:
 *                 $ref: '#/components/examples/RoleExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  roleeError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.patch(
  '/:idRole',
  VerifyToken.validateToken,
  RolesController.updateRoles,
);

/**
 * @swagger
 * /api/roles/:idRole:
 *   delete:
 *     summary: This endpoint is for delete one role based in idRole
 *     description:  Returns the products created
 *     tags:
 *       - Roles
 *     responses:
 *       200:
 *         description: return boolean true
 *         content:
 *           application/json:
 *             examples:
 *               patchRole:
 *                 $ref: '#/components/examples/ExampleDelete'
 *       404:
 *         description: Return error role not found
 *         content:
 *           application/json:
 *             examples:
 *               errorRolesNotFound:
 *                 $ref: '#/components/examples/RoleExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  roleeError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.delete(
  '/:idRole',
  VerifyToken.validateToken,
  RolesController.deleteRoles,
);

export default routes;
