import { CreateServiceDto } from '../../../../../../application/dto/service/createService.dto';
import { SuccessResult } from '../../../../../../utils/resultError/type.result';

export const mockDataService: CreateServiceDto | any = {
  id: 1,
  description: 'the best plomery man',
  idPriceMode: 2,
  idUser: 1,
  name: 'jhonatan',
  pricePerDuration: 2000,
  rangeOfHoursToWork: '10,17',
};

export const mockAllService: CreateServiceDto[] | any = [
  { ...mockDataService },
];

export const mockResponseAllService: SuccessResult<any> = {
  data: mockAllService,
  error: null,
};

export const mockResponseOneService: SuccessResult<any> = {
  data: mockDataService,
  error: null,
};

export const mockResponseUpdateService: SuccessResult<boolean> = {
  data: true,
  error: null,
};

export const mockResponseDeleteService: SuccessResult<boolean> = {
  data: true,
  error: null,
};
