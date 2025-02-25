import { Router } from 'express';
import { ProductsCartController } from '../controllers/productsCart.controller.ts';
import { VerifyToken } from '../middlewares/auth/validateTokens.ts';

const routes: Router = Router();

// ROUTES OF "cart-items"

routes.post(
  '/items',
  VerifyToken.validateToken,
  ProductsCartController.createProductsCart,
);
routes.get(
  '/:cartId/items',
  VerifyToken.validateToken,
  ProductsCartController.findAllProductsCart,
);
routes.get(
  '/:cartId/items/:idItem',
  VerifyToken.validateToken,
  ProductsCartController.findOneProductsCart,
);

routes.patch(
  '/:cartId/items/:idItem',
  VerifyToken.validateToken,
  ProductsCartController.updateProductsCart,
);
routes.delete(
  '/:cartId/items/:idItem',
  VerifyToken.validateToken,
  ProductsCartController.deleteProductsCart,
);

export default routes;
