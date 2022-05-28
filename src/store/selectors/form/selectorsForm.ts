import { PositionType } from 'store/reducer/form/types';
import { AppRootType } from 'store/store';

export const selectPositions = (state: AppRootType): PositionType[] =>
  state.form.positions;
