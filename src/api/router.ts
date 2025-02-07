import { Router } from "express";
import routerUser from './routes/routes.user.ts';

const router:Router=Router();

router.use("/api",routerUser);

export default router;