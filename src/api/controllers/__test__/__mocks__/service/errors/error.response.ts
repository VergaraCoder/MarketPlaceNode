import { ManageError } from '../../../../../../application/errors/error.custom';

export const mockRejectFindOne = {
  error: new ManageError({
    type: 'NOT_FOUND',
    message: 'THERE ARE NOT SERVICE',
  }),
};
