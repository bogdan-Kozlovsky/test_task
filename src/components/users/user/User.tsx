import React from 'react';

import s from 'components/users/user/style.module.scss';
import { UserPropsType } from 'components/users/user/types';
import { fixLengthText } from 'utils/fixLengthText';

export const User = (props: UserPropsType) => {
  const { users } = props;
  return (
    <>
      {users.map(({ id, position, photo, email, phone, name }) => (
        <div key={id} className={s.user__item}>
          <img className={s.user__avatar} src={photo} alt="avatar" />
          <p className={s.user__name}>{fixLengthText(name)}</p>
          <p>{position}</p>
          <p>{fixLengthText(email)}</p>
          <p>{phone}</p>
        </div>
      ))}
    </>
  );
};
