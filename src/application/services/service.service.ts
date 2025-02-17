import { Service } from '../../domain/models/service.model'
import { ServiceRepository } from '../../domain/repositories/service.repository'
import { CreateServiceDto } from '../dto/service/createService.dto'
import { ManageError } from '../errors/error.custom'

export class ServiceService {
  async create(dataServiceDto: CreateServiceDto) {
    try {
      const serviceData: Service = ServiceRepository.create(dataServiceDto)
      await ServiceRepository.save(serviceData)
      return serviceData
    } catch (err: any) {
      throw err
    }
  }

  async findAll() {
    try {
      const services: Service[] = await ServiceRepository.find()
      if (services.length == 0) {
        throw new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT SERVICE',
        })
      }
      return services
    } catch (err: any) {
      throw ManageError.signedError(err.message)
    }
  }

  async findOne(id: number) {
    try {
      const service: Service | null = await ServiceRepository.findOneBy({
        id: id,
      })
      if (!service) {
        throw new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT SERVICE',
        })
      }
      return service
    } catch (err: any) {
      throw ManageError.signedError(err.message)
    }
  }

  async update(id: number, dataUpdateService: Partial<CreateServiceDto>) {
    try {
      const { affected }: number | any = await ServiceRepository.update(
        id,
        dataUpdateService,
      )
      if (affected == 0) {
        throw new ManageError({
          type: 'NOT_FOUND',
          message: 'FAILED TO UPDATE SERVICE',
        })
      }
      return true
    } catch (err: any) {
      throw ManageError.signedError(err.message)
    }
  }

  async delete(id: number) {
    try {
      const { affected }: number | any = await ServiceRepository.delete(id)
      if (affected == 0) {
        throw new ManageError({
          type: 'NOT_FOUND',
          message: 'FAILED TO DELETED SERVICE',
        })
      }
      return true
    } catch (err: any) {
        throw ManageError.signedError(err.message);
    }
  }
}
