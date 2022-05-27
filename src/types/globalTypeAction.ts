import {
  isRedirect,
  resetPage,
  setCurrentPage,
  setUsers,
} from 'store/reducer/user/user-reducer';

export type GlobalActionType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof isRedirect>
  | ReturnType<typeof resetPage>;
