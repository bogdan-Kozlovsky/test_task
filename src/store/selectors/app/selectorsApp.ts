import { AppRootType } from 'store/store';

export const selectIsInitialized = (state: AppRootType): boolean =>
  state.app.isInitialized;