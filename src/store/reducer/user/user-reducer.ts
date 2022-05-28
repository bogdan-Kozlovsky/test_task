import { initialStateType } from 'store/reducer/user/types';
import { GlobalActionType } from 'types/globalTypeAction';

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
