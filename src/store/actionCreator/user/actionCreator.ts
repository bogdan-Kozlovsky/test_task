import { UserType } from 'store/reducer/user/types';

export const setUsers = (user: UserType) =>
  ({ type: 'USER/SET_USERS', payload: { user } } as const);

export const setCurrentPage = (value: number) =>
  ({ type: 'USER/SET_CURRENT_PAGE', value } as const);

export const isRedirect = (value: boolean) =>
  ({ type: 'APP/IS_SUCCESS', value } as const);

export const resetPage = (value: number) => ({ type: 'APP/RESET_PAGE', value } as const);
