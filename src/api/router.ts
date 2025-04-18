import { Router } from 'express';
import routerUser from './routes/user.routes.ts';
import routerProduct from './routes/product.routes.ts';
import routerRoles from './routes/roles.routes.ts';
import routerAuth from './routes/auth.routes.ts';
import routerService from './routes/service.routes.ts';
import routerProducCart from './routes/productsCart.routes.ts';
import routerCart from './routes/cart.routes.ts';
import routerOrder from './routes/orders.routes.ts';
import routerMessage from './routes/message.routes.ts';
import routerConversation from './routes/conversations.routes.ts';

const router: Router = Router();

router.use('/users', routerUser);
router.use('/carts', routerCart);
router.use('/carts', routerProducCart);
router.use('/products', routerProduct);
router.use('/roles', routerRoles);
router.use('/auth', routerAuth);
router.use('/services', routerService);
router.use('/orders', routerOrder);
router.use('/messages', routerMessage);
router.use('/conversations', routerConversation);

export default router;
