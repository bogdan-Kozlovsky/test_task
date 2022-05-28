import { AxiosError } from 'axios';

import { formApi } from 'api/form';
import { PatchServerError } from 'enums/SERVER_RESPONSE_CODE';
import { setInitialized } from 'store/actionCreator/app/actionCreator';
import { isRedirect, resetPage } from 'store/actionCreator/user/actionCreator';
import { getTokenTC } from 'store/middlewares/form/getTokenTC';
import { AppRootType } from 'store/store';
import { ThunkType } from 'types/thunkType';
import { UserType } from 'types/UserType';
import { processingErrorHandler } from 'utils/processingError';

export const addUserTC =
  (data: UserType): ThunkType =>
  async (dispatch, getState: () => AppRootType) => {
    const { token } = getState().form;

    try {
      dispatch(setInitialized(true));

      const firstPage = 1;
      const response = await formApi.addUser(data, token);

      dispatch(isRedirect(response.data.success));
      dispatch(resetPage(firstPage));
    } catch (e) {
      dispatch(getTokenTC());

      const { response } = e as AxiosError;

      if (response && response.status === PatchServerError.CONFLICT) {
        processingErrorHandler((e as any).response.data.message, dispatch);
      } else {
        const { message } = e as AxiosError;

        processingErrorHandler(message, dispatch);
      }

      if (response?.status === PatchServerError.UNPROCESSABLE_ENTITY) {
        const firstErrorMessageIndex = 0;

        const errors = (e as any).response.data.fails;

        const errorsMessages = [];
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const key in errors) {
          const errorMessage = errors[key][firstErrorMessageIndex];
          errorsMessages.push(errorMessage);
        }
        processingErrorHandler(errorsMessages.join(','), dispatch);
      }
    } finally {
      dispatch(setInitialized(false));
    }
  };
