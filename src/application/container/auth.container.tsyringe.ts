import { container } from 'tsyringe'
import { AuthService } from '../services/auth.service.ts'

container.registerSingleton<AuthService>(AuthService)
