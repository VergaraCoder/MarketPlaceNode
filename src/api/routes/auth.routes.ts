import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.ts';
import { ValidateDtoAuth } from '../middlewares/auth/validateDto.CreateToken.ts';
import { VerifyUser } from '../middlewares/auth/validateUser/validateUser.ts';

const routes: Router = Router();

routes.post(
  '/login',
  ValidateDtoAuth,
  VerifyUser.validate,
  AuthController.createAuth,
);
routes.get('/auth/renovate', AuthController.renovateAcessToken);

export default routes;
