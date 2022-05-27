import { Dispatch } from 'redux';

import { userApi } from 'api/user';
import { setInitialized } from 'store/reducer/app/app-reducer';
import { initialStateType, UserType } from 'store/reducer/user/types';
import { GlobalActionType } from 'types/globalTypeAction';
import { processingErrorHandler } from 'utils/processingError';

const initialState: initialStateType = {
  users: [],
  success: false,
  total_pages: 0,
  total_users: 0,
  links: {
    next_url: '',
    prev_url: null,
  },
  params: {
    page: 1,
    count: 6,
  },
  isRedirectValue: false,
};

// reducer
export const userReducer = (
  state: initialStateType = initialState,
  action: GlobalActionType,
): initialStateType => {
  switch (action.type) {
    case 'USER/SET_USERS':
      return { ...state, ...action.payload.user };
    case 'USER/SET_CURRENT_PAGE':
      return {
        ...state,
        params: { ...state.params, page: action.value },
      };
    case 'APP/IS_SUCCESS':
      return { ...state, isRedirectValue: action.value };
    case 'APP/RESET_PAGE':
      return { ...state, params: { ...state.params, page: 1 } };
    default:
      return state;
  }
};

// action creator
export const setUsers = (user: UserType) =>
  ({ type: 'USER/SET_USERS', payload: { user } } as const);
export const setCurrentPage = (value: number) =>
  ({ type: 'USER/SET_CURRENT_PAGE', value } as const);
export const isRedirect = (value: boolean) =>
  ({ type: 'APP/IS_SUCCESS', value } as const);
export const resetPage = (value: number) => ({ type: 'APP/RESET_PAGE', value } as const);

// thunk
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
