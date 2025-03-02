import { container } from 'tsyringe';
import { UserService } from '../services/user.service';

container.registerSingleton<UserService>(UserService);
