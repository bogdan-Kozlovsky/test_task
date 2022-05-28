import { GlobalActionType } from 'store/actionCreator/form/types';
import { InitialStateType } from 'store/reducer/form/types';

const initialState: InitialStateType = {
  isSuccess: false,
  positions: [],
  token: '',
};

export const formReducer = (
  state: InitialStateType = initialState,
  action: GlobalActionType,
): InitialStateType => {
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
