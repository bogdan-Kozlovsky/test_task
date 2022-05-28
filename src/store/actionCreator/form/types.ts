import { setPosition, setToken } from 'store/actionCreator/form/actionCreator';

export type GlobalActionType =
  | ReturnType<typeof setPosition>
  | ReturnType<typeof setToken>;
