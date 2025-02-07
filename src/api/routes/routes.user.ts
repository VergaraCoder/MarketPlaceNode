import { Router} from 'express';
import { UserController } from '../controllers/controller.user.ts';
import {ValidateDtoCreateUser} from '../middlewares/users/validateDto.createUser.ts';

const routes:Router=Router();

routes.post("/users",ValidateDtoCreateUser,UserController.create);
routes.get("/users",UserController.allUsers);
routes.get("/user/:idUser");
routes.patch("/user/:idUser");
routes.delete("/user/:idUser");


export default routes;