import { container } from 'tsyringe'
import { ServiceService } from '../services/service.service.ts'

container.registerSingleton<ServiceService>(ServiceService)
