import 'reflect-metadata';
import { container } from 'tsyringe';
import { ScheduleService } from '../../../application/services/schedule.service.ts';
import {
  mockAllSchedules,
  mockDates,
  mockDeleteSchedule,
  mockOneSchedules,
  mockScheduleRecord,
  mockUpdateSchedule,
} from './__mocks__/schedule/res/schedule.response.ts';
import { ScheduleController } from '../schedule.controller.ts';
import { mockRequestSchedule } from './__mocks__/schedule/argmumentController.ts';
import { mockNext, mockResponse } from './__mocks__/argumentController.ts';

jest.mock('../../../application/services/schedule.service.ts', () => {
  return {
    ScheduleService: jest.fn().mockImplementation(() => ({
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    })),
  };
});

describe('ScheduleController', () => {
  let scheduleService: jest.Mocked<ScheduleService>;

  beforeEach(() => {
    scheduleService =
      new ScheduleService() as ScheduleService as jest.Mocked<ScheduleService>;
    jest.spyOn(container, 'resolve').mockReturnValue(scheduleService);
    jest.clearAllMocks();
  });

  it('should create schedule', async () => {
    scheduleService.create.mockResolvedValueOnce(mockScheduleRecord);
    await ScheduleController.createSchedule(
      mockRequestSchedule,
      mockResponse,
      mockNext,
    );
    expect(scheduleService.create).toHaveBeenCalledWith(
      mockRequestSchedule.body,
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Schedule created successfully',
      data: mockScheduleRecord,
    });
  });

  it('should return all schedules', async () => {
    scheduleService.findAll.mockResolvedValueOnce(mockDates);
    await ScheduleController.findAllSchedule(
      mockRequestSchedule,
      mockResponse,
      mockNext,
    );
    expect(scheduleService.findAll).toHaveBeenCalledWith(
      parseInt(mockRequestSchedule.params.idService),
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'this are the availables schedules',
      schedules: mockDates,
    });
  });

  it('should return one schedule', async () => {
    scheduleService.findOne.mockResolvedValueOnce(mockOneSchedules);
    await ScheduleController.findOneSchedule(
      mockRequestSchedule,
      mockResponse,
      mockNext,
    );
    expect(scheduleService.findOne).toHaveBeenCalledWith(
      parseInt(mockRequestSchedule.params.idSchedule),
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Schedule found successfully',
      data: mockScheduleRecord,
    });
  });

  it('should return update schedule', async () => {
    scheduleService.update.mockResolvedValueOnce(mockUpdateSchedule);
    await ScheduleController.updateSchedule(
      mockRequestSchedule,
      mockResponse,
      mockNext,
    );
    expect(scheduleService.update).toHaveBeenCalledWith(
      parseInt(mockRequestSchedule.params.idSchedule),
      mockRequestSchedule.body,
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Schedule update successfully',
      data: mockUpdateSchedule.data,
    });
  });

  it('should return delete schedule', async () => {
    scheduleService.delete.mockResolvedValueOnce(mockDeleteSchedule);
    await ScheduleController.deleteSchedule(
      mockRequestSchedule,
      mockResponse,
      mockNext,
    );
    expect(scheduleService.delete).toHaveBeenCalledWith(
      parseInt(mockRequestSchedule.params.idSchedule),
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Schedule delete successfully',
      data: mockDeleteSchedule.data,
    });
  });
});
