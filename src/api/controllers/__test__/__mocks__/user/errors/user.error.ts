import { ManageError } from '../../../../../../application/errors/error.custom';
import { ErrorResult } from '../../../../../../utils/resultError/type.result';

export const mockThrowError1: ErrorResult = {
  data: null,
  error: new ManageError({
    type: 'CONFLIC',
    message: 'EL ID ROLE INGRESADO NO CORRESPONSE A NINGUN ROL',
  }),
};

export const mockThrowError2: ErrorResult = {
  data: null,
  error: new ManageError({
    type: 'CONFLIC',
    message: 'EL EMAIL INGRESADO YA ESTA REGISTRADO',
  }),
};
