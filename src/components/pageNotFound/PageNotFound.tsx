import React from 'react';

import error from 'assets/images/error.gif';
import s from 'components/pageNotFound/style.module.scss';

export const PageNotFound = () => (
  <div>
    <img className={s.img} src={error} alt="err" />
  </div>
);
