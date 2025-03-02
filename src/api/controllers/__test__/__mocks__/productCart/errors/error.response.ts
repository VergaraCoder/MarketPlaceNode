import { ManageError } from '../../../../../../application/errors/error.custom';
import { ErrorResult } from '../../../../../../utils/resultError/type.result';

export const mockError: ErrorResult = {
  data: null,
  error: new ManageError({
    type: 'CONFLIC',
    message: 'THE QUANTITY IS MORE HIGT THAT THE PRODUCT STOCK',
  }),
};
