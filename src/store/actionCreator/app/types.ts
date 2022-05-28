import { setErrorValue, setInitialized } from 'store/actionCreator/app/actionCreator';

export type GlobalActionType =
  | ReturnType<typeof setInitialized>
  | ReturnType<typeof setErrorValue>;
