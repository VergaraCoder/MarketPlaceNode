import { DeleteResult, UpdateResult } from 'typeorm';
import { Result } from '../../../../../utils/resultError/type.result';
import { CreateScheduleDto } from '../../../../dto/schedule/createSchedule.dto';
import { CreateServiceDto } from '../../../../dto/service/createService.dto';

export const mockToCreateSchedudule: CreateScheduleDto | any = {
  date: '2025-03-26T12:00:00',
  idCustomer: 1,
  idService: 1,
};

export const mockRecordServiceService: CreateServiceDto | any= {
  description:'The best plomery',
  idPriceMode:1,
  idUser:2,
  name:'plomery',
  pricePerDuration:3000,
  rangeOfHoursToWork:'10,17',
};

export const mockDataCreatedSchedule: CreateScheduleDto | any = {
  id: 1,
  ...mockToCreateSchedudule,
};

export const mockCreateRecordSchedule: jest.Mock<
  typeof mockDataCreatedSchedule
> = jest.fn().mockReturnValue(mockDataCreatedSchedule);

export const mockSaveRecordSchedule: jest.Mock<
  Promise<typeof mockDataCreatedSchedule>
> = jest.fn().mockResolvedValue(mockDataCreatedSchedule);

export const mockFindOneServiceService:jest.Mock<Promise<typeof mockRecordServiceService>>=jest.fn().mockReturnValue(mockRecordServiceService);


export const mockFindAllById:jest.Mock<Promise<typeof mockDataCreatedSchedule[]>>=jest.fn().mockResolvedValue([{...mockDataCreatedSchedule}]);

export const mockFindOneById:jest.Mock<Promise<typeof mockDataCreatedSchedule>>=jest.fn().mockResolvedValue(mockDataCreatedSchedule);


export const mockUpdateSchedule:jest.Mock<Promise<UpdateResult>>=jest.fn().mockResolvedValue(true);


export const mockDeleteSchedule:jest.Mock<Promise<DeleteResult>>=jest.fn().mockResolvedValue(true);



export const mockResultFindOne:Result<CreateScheduleDto | any>={
    data:mockDataCreatedSchedule,
    error:null
};



export const mockUpdate:Result<boolean>={
    data:true,
    error:null
};


export const mockDelete:Result<boolean>={
    data:true,
    error:null
};
