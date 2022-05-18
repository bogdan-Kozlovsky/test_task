import { Dispatch } from 'redux';

import { setErrorValue } from 'store/reducer/app/app-reducer';

export const processingErrorHandler = (error: string, dispatch: Dispatch) => {
  if (error) {
    dispatch(setErrorValue(error));
    const callTimer = 5000;
    setTimeout(() => {
      dispatch(setErrorValue(null));
    }, callTimer);
  }
};
