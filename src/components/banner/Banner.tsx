import React from 'react';

import { NavLink } from 'react-router-dom';

import banner from 'assets/images/banner.jpg';
import { Description } from 'components/banner/description/Description';
import s from 'components/banner/style.module.scss';
import { PathNavigation } from 'enums/NAVIGATION';

export const Banner = () => (
  <div className={`${s.wrapper} container`} style={{ backgroundImage: `url(${banner})` }}>
    <div className={s.description}>
      <Description />

      <NavLink to={PathNavigation.FORM} className="btn">
        Sign up
      </NavLink>
    </div>
  </div>
);
