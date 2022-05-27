import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'assets/icons/logo.svg';
import s from 'components/header/style.module.scss';
import { PathNavigation } from 'enums/NAVIGATION';

export const Header = () => (
  <div className="container">
    <div className={s.wrapper}>
      <NavLink to={PathNavigation.BANNER}>
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>

      <div className={s.wrapperNavigate}>
        <NavLink to={PathNavigation.USER} className="btn">
          Users
        </NavLink>

        <NavLink to={PathNavigation.FORM} className="btn">
          Sign up
        </NavLink>
      </div>
    </div>
  </div>
);
