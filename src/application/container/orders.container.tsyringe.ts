import { container } from 'tsyringe';
import { OrdersService } from '../services/orders.service.ts';

container.registerSingleton<OrdersService>(OrdersService);
