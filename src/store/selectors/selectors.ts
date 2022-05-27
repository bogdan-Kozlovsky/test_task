import { PositionType } from 'store/reducer/form/types';
import { UserType } from 'store/reducer/user/types';
import { AppRootType } from 'store/store';
// user
export const selectUsers = (state: AppRootType): UserType[] => state.user.users;
export const selectPage = (state: AppRootType) => state.user.params.page;
export const selectCount = (state: AppRootType) => state.user.params.count;
export const selectTotalPages = (state: AppRootType) => state.user.total_pages;
export const selectIsRedirect = (state: AppRootType) => state.user.isRedirectValue;

// app
export const selectIsInitialized = (state: AppRootType) => state.app.isInitialized;

// form
export const selectPositions = (state: AppRootType): PositionType[] =>
  state.form.positions;

// error
export const selectErrorMessage = (state: AppRootType) => state.app.errorMessage;
