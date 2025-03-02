import { container } from 'tsyringe';
import { ProductsCartService } from '../services/productsCart.service.ts';

container.registerSingleton<ProductsCartService>(ProductsCartService);
