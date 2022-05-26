import React from 'react';

import s from 'components/users/user/style.module.scss';
import { UserType } from 'store/reducer/user/types';

type UserPropsType = {
  users: UserType[];
};

export const User = (props: UserPropsType) => {
  const { users } = props;
  return (
    <>
      {users.map(({ id, position, photo, email, phone, name, registrationTimestamp }) => (
        <div key={id} className={s.user__item}>
          <img className={s.user__avatar} src={photo} alt="avatar" />
          <p className={s.user__name}>{name}</p>
          <p>{position}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      ))}
    </>
  );
};
