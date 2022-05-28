import { Dispatch } from 'redux';

import { userApi } from 'api/user';
import { setInitialized } from 'store/actionCreator/app/actionCreator';
import { isRedirect, setUsers } from 'store/actionCreator/user/actionCreator';
import { processingErrorHandler } from 'utils/processingError';

export const getUsersTC = (page: number, count: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setInitialized(true));
    const response = await userApi.getUser(page, count);
    dispatch(isRedirect(false));
    dispatch(setUsers(response.data));
  } catch (e) {
    const { message }: any = e;
    processingErrorHandler(message, dispatch);
  } finally {
    dispatch(setInitialized(false));
  }
};
