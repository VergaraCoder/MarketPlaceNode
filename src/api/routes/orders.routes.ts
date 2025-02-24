import { Router } from 'express'
import { OrdersController } from '../controllers/orders.controller.ts'
import { ValidateDtoCreateOrders } from '../middlewares/orders/validateDto.createOrder.ts'
import { ValidateDtoUpdateOrders } from '../middlewares/orders/validateDto.updateOrder.ts'
import { VerifyToken } from '../middlewares/auth/validateTokens.ts'
const routes: Router = Router()

routes.post(
  '/',
  VerifyToken.validateToken,
  ValidateDtoCreateOrders,
  OrdersController.createOrders,
)
routes.get(
  '/', 
  VerifyToken.validateToken,
  OrdersController.findAllOrders)

routes.get(
  '/orders/:idOrders',
  VerifyToken.validateToken,
  OrdersController.findOneOrders,
)
routes.patch(
  '/orders/:idOrders',
  ValidateDtoUpdateOrders,
  OrdersController.updateOrders,
)
routes.delete(
  '/orders/:idOrders',
  VerifyToken.validateToken,
  OrdersController.deleteOrders,
)

export default routes
