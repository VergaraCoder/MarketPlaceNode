import { Router } from 'express'
import { CartController } from '../controllers/cart.controller.ts'
import {VerifyToken} from '../middlewares/auth/validateTokens.ts';

const routes: Router = Router()

// ROUTES "cart"

routes.post('/', CartController.createCart)
routes.get('/:cartId', VerifyToken.validateToken, CartController.findAllCart)
routes.patch('/:idCart', CartController.updateCart)
routes.delete('/:idCart', CartController.deleteCart)

export default routes
