import { GlobalActionType } from 'store/actionCreator/app/types';
import { initialStateType } from 'store/reducer/app/types';

const initialState: initialStateType = {
  isInitialized: false,
  errorMessage: null,
};

export const appReducer = (
  state: initialStateType = initialState,
  action: GlobalActionType,
): initialStateType => {
  switch (action.type) {
    case 'APP/SET_INITIALIZED':
      return { ...state, isInitialized: action.value };
    case 'APP/SET_ERROR_VALUE':
      return { ...state, errorMessage: action.value };
    default:
      return state;
  }
};
