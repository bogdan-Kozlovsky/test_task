import React from 'react';

import error from 'assets/images/error.gif';
import s from 'components/error404/style.module.scss';

export const Error404 = () => (
  <div>
    <img className={s.img} src={error} alt="err" />
  </div>
);
