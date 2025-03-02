import 'reflect-metadata';
import { ScheduleService } from '../schedule.service.ts';
import { ServiceService } from '../service.service.ts';
import {
  mockCreateRecordSchedule,
  mockDataCreatedSchedule,
  mockDelete,
  mockDeleteSchedule,
  mockFindAllById,
  mockFindOneById,
  mockRecordServiceService,
  mockResultFindOne,
  mockSaveRecordSchedule,
  mockToCreateSchedudule,
  mockUpdate,
  mockUpdateSchedule,
} from './__mock__/schedule/response.ts';
import { ScheduleRepository } from '../../../domain/repositories/schedule.repository.ts';
import { container } from 'tsyringe';
import { Result } from '../../../utils/resultError/type.result.ts';
import { Schedule } from '../../../domain/models/schedule.model.ts';

jest.mock('../service.service.ts');
jest.mock('../../../domain/repositories/schedule.repository.ts');
jest.mock('../../errors/error.custom.ts');

describe('ScheduleService', () => {
  let scheduleService: ScheduleService;
  let serviceService: jest.Mocked<ServiceService>;
  beforeEach(() => {
    scheduleService = new ScheduleService();
    serviceService =
      new ServiceService() as ServiceService as jest.Mocked<ServiceService>;

    jest
      .spyOn(container, 'resolve')
      .mockReturnValue(
        serviceService as unknown as jest.Mocked<ServiceService>,
      );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should ', async () => {
    serviceService.findOne.mockResolvedValueOnce(mockRecordServiceService);

    ScheduleRepository.create = mockCreateRecordSchedule;
    ScheduleRepository.save = mockSaveRecordSchedule;

    const response = await scheduleService.create(mockToCreateSchedudule);

    expect(serviceService.findOne).toHaveBeenCalledWith(
      mockToCreateSchedudule.idService,
    );
    expect(ScheduleRepository.create).toHaveBeenCalledWith(
      mockToCreateSchedudule,
    );
    expect(ScheduleRepository.save).toHaveBeenCalledWith(
      mockDataCreatedSchedule,
    );
    expect(response).toEqual(mockDataCreatedSchedule);
  });

  it('', async () => {
    serviceService.findOne.mockResolvedValueOnce(mockRecordServiceService);
    const idService: number = 1;
    ScheduleRepository.findBy = mockFindAllById;

    const result:string[]=await scheduleService.findAll(idService);
    expect(ScheduleRepository.findBy).toHaveBeenCalledWith({idService});
    expect(ScheduleRepository.findBy).toHaveBeenCalledTimes(1);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });

  it('',async ()=>{
    const idSchedule:number=1;

    ScheduleRepository.findOneBy =mockFindOneById;

    const result:Result<Schedule>=await scheduleService.findOne(idSchedule);

    expect(ScheduleRepository.findOneBy).toHaveBeenCalledWith({id:idSchedule});
    expect(result).toEqual(mockResultFindOne);
  })

  it('', async ()=>{
    const idSchedule:number=1;

    ScheduleRepository.update=mockUpdateSchedule;

    const result:Result<boolean>=await scheduleService.update(idSchedule,mockToCreateSchedudule);

    expect(ScheduleRepository.update).toHaveBeenCalledWith(idSchedule,mockToCreateSchedudule);
    expect(result).toEqual(mockUpdate);

  });


  it('', async ()=>{
    const idSchedule:number=1;

    ScheduleRepository.delete=mockDeleteSchedule;

    const result:Result<boolean>=await scheduleService.delete(idSchedule);

    expect(ScheduleRepository.delete).toHaveBeenCalledWith(idSchedule);
    expect(result).toEqual(mockDelete);
  });


});

//2025-02-26T12:00:00

// the method toHaveBeenWith only i used with method spyOn or jest.fn() for mocks
