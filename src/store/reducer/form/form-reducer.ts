import { Dispatch } from 'redux';

import { formApi } from 'api/form';
import { AddUserType } from 'api/form/types';
import { tokenApi } from 'api/token';
import { PATH_SERVER_RESPONS } from 'common/enums/patch';
import { setInitialized } from 'store/reducer/app/app-reducer';
import { initialStateType, PositionType } from 'store/reducer/form/types';
import { isRedirect, resetPage } from 'store/reducer/user/user-reducer';
import { AppRootType } from 'store/store';
import { processingErrorHandler } from 'utils/processingError';
import { ThunkType } from 'utils/thunkType';

const initialState: initialStateType = {
  success: false,
  positions: [],
  token: '',
};

// reducer
export const formReducer = (
  state: initialStateType = initialState,
  action: GlobalActionType,
): initialStateType => {
  switch (action.type) {
    case 'POSITION/SET_POSITION': {
      return { ...state, ...action.payload.position };
    }
    case 'POSITION/SET_TOKEN': {
      return { ...state, token: action.tokenValue };
    }
    default:
      return state;
  }
};

// action creator
const setPosition = (position: PositionType) =>
  ({
    type: 'POSITION/SET_POSITION',
    payload: { position },
  } as const);
const setToken = (tokenValue: string) =>
  ({
    type: 'POSITION/SET_TOKEN',
    tokenValue,
  } as const);
export type GlobalActionType =
  | ReturnType<typeof setPosition>
  | ReturnType<typeof setToken>;

// thunk creator
export const getPositionTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setInitialized(true));
    const respons = await formApi.getPosition();
    dispatch(setPosition(respons.data));
  } catch (e) {
    const { message }: any = e;
    processingErrorHandler(message, dispatch);
  } finally {
    dispatch(setInitialized(false));
  }
};

export const getTokenTC = () => async (dispatch: Dispatch) => {
  try {
    const respons = await tokenApi.getToken();
    dispatch(setToken(respons.data.token));
  } catch (e) {
    const { message }: any = e;
    processingErrorHandler(message, dispatch);
  }
};

export const addUserTC =
  (data: AddUserType): ThunkType =>
  async (dispatch, getState: () => AppRootType) => {
    const { token } = getState().form;
    try {
      dispatch(setInitialized(true));
      const response = await formApi.addUser(data, token);
      dispatch(isRedirect(response.data.success));
      const firstPage = 1;
      dispatch(resetPage(firstPage));

      const user = {
        ...data,
        user_id: response.data.user_id,
      };
      // dispatch(setUser(user))
    } catch (e) {
      dispatch(getTokenTC());

      if ((e as any).response.status === PATH_SERVER_RESPONS.ERROR_409) {
        const firstElement = 0;
        // eslint-disable-next-line no-alert
        // alert((e as any).response.data.fails.photo[firstElement]);
        console.log(e);
        processingErrorHandler((e as any).response.data.message, dispatch);
      } else {
        const { message }: any = e;
        processingErrorHandler(message, dispatch);
      }
      if ((e as any).response.status === PATH_SERVER_RESPONS.ERROR_422) {
        console.log(e);
        const firstElement = 0;
        const errors = (e as any).response.data.fails;
        const errorsMessages = [];
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const key in errors) {
          // eslint-disable-next-line no-undef,@typescript-eslint/no-magic-numbers
          const errorMessage = errors[key][0];
          errorsMessages.push(errorMessage);
        }

        processingErrorHandler(errorsMessages.join(','), dispatch);
      }
    } finally {
      dispatch(setInitialized(false));
      // dispatch(isSuccess(false));
    }
  };
