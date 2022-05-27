import { Dispatch } from 'redux';

import { setErrorValue } from 'store/reducer/app/app-reducer';

const DELAY = 5000;

export const processingErrorHandler = (error: string, dispatch: Dispatch) => {
  if (error) {
    dispatch(setErrorValue(error));
    setTimeout(() => {
      dispatch(setErrorValue(null));
    }, DELAY);
  }
};
