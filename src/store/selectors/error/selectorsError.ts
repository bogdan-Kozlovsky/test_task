import { AppRootType } from 'store/store';

export const selectErrorMessage = (state: AppRootType): null | string =>
  state.app.errorMessage;