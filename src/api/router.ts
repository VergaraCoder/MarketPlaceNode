import { Router } from "express";
import routerUser from './routes/user.routes.ts';
import routerProduct from './routes/product.routes.ts';

const router:Router=Router();

router.use("/api",routerUser);
router.use("/api",routerProduct);

export default router;