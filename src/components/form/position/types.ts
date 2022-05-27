import { ChangeEvent } from 'react';

import { PositionType } from 'store/reducer/form/types';

export type PositionsPropsType = {
  onPositionIdChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-undef
  setFormError: (value: string) => JSX.Element | null;
  positions: PositionType[];
  position_id: string;
};
