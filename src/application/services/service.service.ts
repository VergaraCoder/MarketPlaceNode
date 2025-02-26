import { Result } from 'utils/resultError/type.result.ts';
import { Service } from '../../domain/models/service.model.ts';
import { ServiceRepository } from '../../domain/repositories/service.repository.ts';
import { CreateServiceDto } from '../dto/service/createService.dto.ts';
import { ManageError } from '../errors/error.custom.ts';

export class ServiceService {
  async create(dataServiceDto: CreateServiceDto) {
    try {
      const serviceData: Service = ServiceRepository.create(dataServiceDto);
      await ServiceRepository.save(serviceData);
      return serviceData;
    } catch (err: any) {
      throw err;
    }
  }

  async findAll(): Promise<Result<Service[]>> {
    const services: Service[] = await ServiceRepository.find();
    if (services.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT SERVICE',
        }),
      };
    }
    return {
      data: services,
      error: null,
    };
  }

  async findOne(id: number): Promise<Service> {
    try {
      const service: Service | null = await ServiceRepository.findOneBy({
        id: id,
      });
      if (!service) {
        throw new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT SERVICE',
        });
      }
      return service;
    } catch (err: any) {
      throw ManageError.signedError(err.message);
    }
  }

  async update(
    id: number,
    dataUpdateService: Partial<CreateServiceDto>,
  ): Promise<Result<Boolean>> {
    const { affected }: number | any = await ServiceRepository.update(
      id,
      dataUpdateService,
    );
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'FAILED TO UPDATE SERVICE',
        }),
      };
    }
    return {
      data: true,
      error: null,
    };
  }

  async delete(id: number): Promise<Result<Boolean>> {
    const { affected }: number | any = await ServiceRepository.delete(id);
    if (affected == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'FAILED TO DELETED SERVICE',
        }),
      };
    }
    return {
      data: true,
      error: null,
    };
  }
}
