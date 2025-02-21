import { Router } from 'express'
import { ControllerProduct } from '../controllers/product.controller.ts'
import { ValidateDtoCreateProducts } from '../middlewares/products/validateDto.createProducts.ts'
import { ValidateDtoUpdateProducts } from '../middlewares/products/validateDto.updateProduct.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'
const routes: Router = Router()

/**
 * @swagger
 * tags:
 *      name: Products
 *      description: The products endpoints
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: This endpoint is for create one or multiple products
 *     description:  Returns the product or products created
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: return products that was created
 *         content:
 *           application/json:
 *             examples:
 *               productCreated:
 *                 $ref: '#/components/examples/ProductExample'
 *       400:
 *         description: return error for badRequest
 *         content:
 *           application/json:
 *             examples:
 *               errorBadRequest:
 *                 $ref: '#/components/examples/ProductExample400'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  productError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.post(
  '/products',
  VerifyToken.validateToken,
  ValidateDtoCreateProducts,
  ControllerProduct.create,
)

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: This endpoint is for get all products
 *     description:  Returns the products created
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: return all products
 *         content:
 *           application/json:
 *             examples:
 *               oneProduct:
 *                 $ref: '#/components/examples/ProductExampleAll'
 *       404:
 *         description: return error for not found
 *         content:
 *           application/json:
 *             examples:
 *               errorNotFound:
 *                 $ref: '#/components/examples/ProductExample404All'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  productError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get('/products', VerifyToken.validateToken, ControllerProduct.findAll)

/**
 * @swagger
 * /api/products/:idProduct:
 *   get:
 *     summary: This endpoint is for get one product based in idProduct
 *     description:  Returns the products created
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: return one product
 *         content:
 *           application/json:
 *             examples:
 *               allProduct:
 *                 $ref: '#/components/examples/ProductExample'
 *       404:
 *         description: return error for not found
 *         content:
 *           application/json:
 *             examples:
 *               errorNotFound:
 *                 $ref: '#/components/examples/ProductExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  productError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.get(
  '/products/:idProduct',
  VerifyToken.validateToken,
  ControllerProduct.findOneProduct,
)

/**
 * @swagger
 * /api/products/:idProduct:
 *   patch:
 *     summary: This endpoint is for update one product
 *     description:  Returns boolean indicated that the products was updated
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: return boolean
 *         content:
 *           application/json:
 *             examples:
 *               patchProduct:
 *                 $ref: '#/components/examples/ExamplePatch'
 *       404:
 *         description: return error for not found
 *         content:
 *           application/json:
 *             examples:
 *               errorNotFound:
 *                 $ref: '#/components/examples/ProductExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  productError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.patch(
  '/products/:idProduct',
  VerifyToken.validateToken,
  ValidateDtoUpdateProducts,
  ControllerProduct.updateProduct,
)

/**
 * @swagger
 * /api/products/:idProduct:
 *   delete:
 *     summary: This endpoint is for delete one product
 *     description:  Returns boolean indicated that the products was deleted
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: return boolean
 *         content:
 *           application/json:
 *             examples:
 *               deleteProduct:
 *                 $ref: '#/components/examples/ExampleDelete'
 *       404:
 *         description: return error for not found
 *         content:
 *           application/json:
 *             examples:
 *               errorNotFound:
 *                 $ref: '#/components/examples/ProductExample404One'
 *       500:
 *         description: return error 500
 *         content:
 *            application/json:
 *              examples:
 *                  productError:
 *                      $ref: '#/components/examples/ExampleError500'
 */
routes.delete(
  '/products/:idProduct',
  VerifyToken.validateToken,
  ControllerProduct.deleteProduct,
)

export default routes
