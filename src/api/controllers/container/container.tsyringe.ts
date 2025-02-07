import { container } from "tsyringe";
import { UserController } from "../controller.user";




container.registerSingleton<UserController>(UserController);