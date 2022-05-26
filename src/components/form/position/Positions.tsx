import React, { ChangeEvent } from 'react';

import s from 'components/form/style.module.scss';
import { PositionType } from 'store/reducer/form/types';

type PositionsPropsType = {
  onPositionIdChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-undef
  setFormError: (value: string) => JSX.Element | null;
  positions: PositionType[];
  position_id: string;
};

export const Positions = (props: PositionsPropsType) => {
  const { onPositionIdChange, setFormError, positions, position_id: positionId } = props;
  return (
    <div>
      {positions.map(({ name, id }) => (
        <label key={id} className={s.form__select_item}>
          <input
            defaultChecked={positionId === id}
            onChange={onPositionIdChange}
            required
            type="radio"
            className={s.form__radio}
            value={id}
            name="position_id"
          />
          <span className={s.form__check_style} />
          {name}
          {setFormError('position_id')}
        </label>
      ))}
    </div>
  );
};
