import { Router } from 'express'
import { ProductsCartController } from '../controllers/productsCart.controller.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'

const routes: Router = Router()

routes.post(
  '/productsCart',
  VerifyToken.validateToken,
  ProductsCartController.createProductsCart,
)
routes.get(
  '/productsCart',
  VerifyToken.validateToken,
  ProductsCartController.findAllProductsCart,
)
routes.get(
  '/productsCart/:idProductsCart',
  VerifyToken.validateToken,
  ProductsCartController.findOneProductsCart,
)
routes.patch(
  '/productsCart/:idProductsCart',
  VerifyToken.validateToken,
  ProductsCartController.updateProductsCart,
)
routes.delete(
  '/productsCart/:idProductsCart',
  VerifyToken.validateToken,
  ProductsCartController.deleteProductsCart,
)

export default routes
