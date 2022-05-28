import { AxiosError } from 'axios';

import { formApi } from 'api/form';
import { setInitialized } from 'store/actionCreator/app/actionCreator';
import { setPosition } from 'store/actionCreator/form/actionCreator';
import { ThunkType } from 'types/thunkType';
import { processingErrorHandler } from 'utils/processingError';

export const getPositionTC = (): ThunkType => async dispatch => {
  try {
    dispatch(setInitialized(true));

    const response = await formApi.getPosition();

    dispatch(setPosition(response.data));
  } catch (e) {
    const { message } = e as AxiosError;

    processingErrorHandler(message, dispatch);
  } finally {
    dispatch(setInitialized(false));
  }
};
