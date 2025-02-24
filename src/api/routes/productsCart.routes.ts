import { Router } from 'express'
import { ProductsCartController } from '../controllers/productsCart.controller.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'

const routes: Router = Router()

routes.post(
  '/',
  VerifyToken.validateToken,
  ProductsCartController.createProductsCart,
)
routes.get(
  '/',
  VerifyToken.validateToken,
  ProductsCartController.findAllProductsCart,
)
routes.get(
  '/:id',
  VerifyToken.validateToken,
  ProductsCartController.findOneProductsCart,
)

routes.get(
  '/:cartId',
  VerifyToken.validateToken,
  ProductsCartController.findOneProductsCart,
)

routes.patch(
  '/cart-items/:idProductsCart',
  VerifyToken.validateToken,
  ProductsCartController.updateProductsCart,
)
routes.delete(
  '/cart-items/:idProductsCart',
  VerifyToken.validateToken,
  ProductsCartController.deleteProductsCart,
)

export default routes
