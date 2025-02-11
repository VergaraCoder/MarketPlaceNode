import { container } from "tsyringe";
import { ProductService } from "../services/product.service";


container.registerSingleton<ProductService>(ProductService);
