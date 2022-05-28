import { Dispatch } from 'redux';

import { setErrorValue } from 'store/actionCreator/app/actionCreator';

const DELAY = 5000;

export const processingErrorHandler = (error: string, dispatch: Dispatch) => {
  if (error) {
    dispatch(setErrorValue(error));
    setTimeout(() => {
      dispatch(setErrorValue(null));
    }, DELAY);
  }
};
