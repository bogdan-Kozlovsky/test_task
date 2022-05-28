import { PositionType } from 'store/reducer/form/types';

export const setPosition = (position: PositionType) =>
  ({ type: 'POSITION/SET_POSITION', payload: { position } } as const);

export const setToken = (tokenValue: string) =>
  ({ type: 'POSITION/SET_TOKEN', tokenValue } as const);
