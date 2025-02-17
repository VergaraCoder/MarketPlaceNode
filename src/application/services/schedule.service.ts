import { container } from 'tsyringe'
import { ServiceService } from '../services/service.service.ts'
import { ManageError } from '../errors/error.custom.ts'
import { CreateScheduleDto } from '../dto/schedule/createSchedule.dto.ts'
import { Schedule } from '../../domain/models/schedule.model.ts'
import { ScheduleRepository } from '../../domain/repositories/schedule.repository.ts'
import { Service } from '../../domain/models/service.model.ts'

export class ScheduleService {
  async create(dataToCreateSchedule: CreateScheduleDto) {
    try {
      const serviceService: ServiceService = container.resolve(ServiceService)
      await serviceService.findOne(dataToCreateSchedule.idService)
      const scheduleData=ScheduleRepository.create(dataToCreateSchedule);
      await ScheduleRepository.save(scheduleData);
      return scheduleData;
    } catch (err: any) {
      if (err.errno == 1452) {
        throw new ManageError({
          type: 'CONFLIC',
          message: 'EL USUARIO REFERENCIADO NO EXISTE',
        })
      } else {
        throw ManageError.signedError(err.message)
      }
    }
  }

  async findAll(idService: number) {
    try {
      const dateCurrent: Date = new Date()

      // dateCurrent.setTime(dateCurrent.getTime() - 18000000)
      const dayToFinishWeek: number =
      dateCurrent.getDay() !== 0 ? 5 - dateCurrent.getDay(): 5
        
      const schedules:Schedule[] = await ScheduleRepository.findBy({
        idService: idService,
      })
      const serviceService: ServiceService = container.resolve(ServiceService)
      const oneService: Service = await serviceService.findOne(idService)
      const minHour: number = parseInt(
        oneService.rangeOfHoursToWork.split(',')[0],
      )
      const maxHour: number = parseInt(
        oneService.rangeOfHoursToWork.split(',')[1],
      )
      let hoursAvailables: Date[] = [];
      for (let day = 0; day <= dayToFinishWeek; day++) {
        const startDate = new Date(dateCurrent)
        startDate.setHours(minHour, 0, 0)

        for (let hour = minHour; hour <= maxHour; hour++) {
          const dayCandidate: Date = new Date(dateCurrent)
          
          dayCandidate.setHours(hour,0,0,0)
          dayCandidate.setDate(dateCurrent.getDate() + day)
          dayCandidate.setTime(dayCandidate.getTime() - 18000000);
          
          const IsOcupped: boolean =
          schedules.length > 0 ?
          schedules.some((schedule: Schedule) => {
            const dateCompared: Date = new Date(schedule.date)            
            return (dateCompared.getTime()-18000000) === dayCandidate.getTime()
          })
          : false;

          if (!IsOcupped) {            
            hoursAvailables.push(dayCandidate)
          }
        }
      }
      return hoursAvailables;
    } catch (err: any) {
      throw err;
    }
  }

  async findOne(idSchedule:number) {
    try {
      const schedule: Schedule | null = await ScheduleRepository.findOneBy({id:idSchedule})
      if(!schedule){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"Schedule not found"
        });
      }
      return schedule;
    } catch (err: any) {
      throw ManageError.signedError(err.message);
    }
  }

  async update(idSchedule:number, dataUpdateSchedule:Partial<Schedule>) {
    try {
      const {affected}:number | any = await ScheduleRepository.update(idSchedule,dataUpdateSchedule)
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"Schedule not found"
        });
      }
      return true;
    } catch (err: any) {
      throw ManageError.signedError(err.message);
    }
  }

  async delete(idSchedule:number) {
    try {
      const {affected}:number | any = await ScheduleRepository.delete(idSchedule)
      if(affected==0){
        throw new ManageError({
          type:"NOT_FOUND",
          message:"Schedule not found"
        });
      }
      return true;
    } catch (err: any) {
      throw ManageError.signedError(err.message);
    }
  }
}
