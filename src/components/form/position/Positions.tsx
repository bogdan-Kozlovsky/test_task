import React from 'react';

import { PositionsPropsType } from 'components/form/position/types';
import s from 'components/form/style.module.scss';

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
