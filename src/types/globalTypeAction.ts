import {
  isRedirect,
  resetPage,
  setCurrentPage,
  setUsers,
} from 'store/actionCreator/user/actionCreator';

export type GlobalActionType =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof isRedirect>
  | ReturnType<typeof resetPage>;
