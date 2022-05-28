import { UserType } from 'store/reducer/user/types';
import { AppRootType } from 'store/store';

export const selectUsers = (state: AppRootType): UserType[] => state.user.users;
export const selectPage = (state: AppRootType): number => state.user.params.page;
export const selectCount = (state: AppRootType): number => state.user.params.count;
export const selectTotalPages = (state: AppRootType): number => state.user.total_pages;
export const selectIsRedirect = (state: AppRootType): boolean =>
  state.user.isRedirectValue;
