import { AxiosError } from 'axios';

import { tokenApi } from 'api/token';
import { setToken } from 'store/actionCreator/form/actionCreator';
import { ThunkType } from 'types/thunkType';
import { processingErrorHandler } from 'utils/processingError';

export const getTokenTC = (): ThunkType => async dispatch => {
  try {
    const response = await tokenApi.getToken();

    dispatch(setToken(response.data.token));
  } catch (e) {
    const { message } = e as AxiosError;

    processingErrorHandler(message, dispatch);
  }
};
