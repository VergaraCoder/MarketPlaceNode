import { container } from 'tsyringe';
import { CartService } from '../services/cart.service.ts';

container.registerSingleton<CartService>(CartService);
