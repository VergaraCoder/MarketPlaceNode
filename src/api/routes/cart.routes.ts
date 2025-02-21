import { Router } from 'express'
import { CartController } from '../controllers/cart.controller.ts'
import {VerifyToken} from '../middlewares/auth/validateTokens.ts';

const routes: Router = Router()

routes.post('/cart', CartController.createCart)
routes.get('/cart', VerifyToken.validateToken, CartController.findAllCart)
routes.get('/cart/:idCart', CartController.findOneCart)
routes.patch('/cart/:idCart', CartController.updateCart)
routes.delete('/cart/:idCart', CartController.deleteCart)

export default routes
