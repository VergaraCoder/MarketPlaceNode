import { CreateScheduleDto } from '../../../../../../application/dto/schedule/createSchedule.dto';
import { SuccessResult } from '../../../../../../utils/resultError/type.result';

export const mockScheduleRecord: CreateScheduleDto | any = {
  id: 1,
  date: '2025-03-30T12:00:00',
  idCustomer: 2,
  idService: 1,
};

export const mockDates: string[] = [mockScheduleRecord.date];

export const mockAllSchedules: SuccessResult<CreateScheduleDto[] | any> = {
  data: [mockScheduleRecord],
  error: null,
};

export const mockOneSchedules: SuccessResult<CreateScheduleDto | any> = {
  data: mockScheduleRecord,
  error: null,
};

export const mockUpdateSchedule: SuccessResult<boolean> = {
  data: true,
  error: null,
};

export const mockDeleteSchedule: SuccessResult<boolean> = {
  data: true,
  error: null,
};
