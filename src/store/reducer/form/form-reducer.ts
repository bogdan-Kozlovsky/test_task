import { Dispatch } from 'redux';

import { formApi } from 'api/form';
import { tokenApi } from 'api/token';
import { PATH_SERVER_ERRORS } from 'common/enums/serverRespons';
import { setInitialized } from 'store/reducer/app/app-reducer';
import { initialStateType, PositionType } from 'store/reducer/form/types';
import { isRedirect, resetPage } from 'store/reducer/user/user-reducer';
import { AppRootType } from 'store/store';
import { UserType } from 'types/UserType';
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
  ({ type: 'POSITION/SET_POSITION', payload: { position } } as const);
const setToken = (tokenValue: string) =>
  ({ type: 'POSITION/SET_TOKEN', tokenValue } as const);

// global action creator type
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
  (data: UserType): ThunkType =>
  async (dispatch, getState: () => AppRootType) => {
    const { token } = getState().form;
    try {
      dispatch(setInitialized(true));
      const response = await formApi.addUser(data, token);
      dispatch(isRedirect(response.data.success));
      const firstPage = 1;
      dispatch(resetPage(firstPage));
    } catch (e) {
      dispatch(getTokenTC());
      // eslint-disable-next-line no-undef
      if ((e as any).response.status === PATH_SERVER_ERRORS.ERROR_409) {
        processingErrorHandler((e as any).response.data.message, dispatch);
      } else {
        const { message }: any = e;
        processingErrorHandler(message, dispatch);
      }
      if ((e as any).response.status === PATH_SERVER_ERRORS.ERROR_422) {
        const zeroElement = 0;
        const errors = (e as any).response.data.fails;
        const errorsMessages = [];
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const key in errors) {
          const errorMessage = errors[key][zeroElement];
          errorsMessages.push(errorMessage);
        }
        processingErrorHandler(errorsMessages.join(','), dispatch);
      }
    } finally {
      dispatch(setInitialized(false));
    }
  };
