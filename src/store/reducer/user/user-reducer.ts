import { Dispatch } from 'redux';

import { userApi } from 'api/user';
import { setInitialized } from 'store/reducer/app/app-reducer';
import { initialStateType, UserType } from 'store/reducer/user/types';
import { GlobalActionType } from 'utils/globalTypeAction';
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
};

// reducer
export const userReducer = (
  state: initialStateType = initialState,
  action: GlobalActionType,
): initialStateType => {
  switch (action.type) {
    case 'USER/SET_USERS': {
      return { ...state, ...action.payload.user };
    }
    case 'USER/SET_CURRENT_PAGE': {
      return {
        ...state,
        params: {
          ...state.params,
          page: action.value,
        },
      };
    }
    default:
      return state;
  }
};

// action creator
export const setUsers = (user: UserType) =>
  ({
    type: 'USER/SET_USERS',
    payload: { user },
  } as const);

export const setCurrentPage = (value: number) =>
  ({
    type: 'USER/SET_CURRENT_PAGE',
    value,
  } as const);

// thunk
export const getUsersTC = (page: number, count: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setInitialized(true));
    const respons = await userApi.getUser(page, count);
    dispatch(setUsers(respons.data));
  } catch (e) {
    const { message }: any = e;
    processingErrorHandler(message, dispatch);
  } finally {
    dispatch(setInitialized(false));
  }
};
