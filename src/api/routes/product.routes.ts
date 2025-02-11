import { Router } from "express";
import { ControllerProduct } from "../controllers/product.controller.ts";
import {ValidateDtoCreateProducts} from '../middlewares/products/validateDto.createProducts.ts';
import {ValidateDtoUpdateProducts} from '../middlewares/products/validateDto.updateProduct.ts';
const routes:Router=Router();

routes.post("/products",ValidateDtoCreateProducts,ControllerProduct.create);
routes.get("/products",ControllerProduct.findAll);
routes.get("/products/:idProduct",ControllerProduct.findOneProduct);
routes.patch("/products/:idProduct",ValidateDtoUpdateProducts,ControllerProduct.updateProduct);
routes.delete("/products/:idProduct",ControllerProduct.deleteProduct);

export default routes;