import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'assets/icons/logo.svg';
import { PATH_NAVIGATION } from 'common/enums/navigation';
import s from 'components/header/style.module.scss';

export const Header = () => (
  <div className="container">
    <div className={s.wrapper}>
      <NavLink to={PATH_NAVIGATION.BANNER}>
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={s.wrapperNavigate}>
        <NavLink to={PATH_NAVIGATION.USERS} className="btn">
          Users
        </NavLink>
        <NavLink to={PATH_NAVIGATION.FORM} className="btn">
          Sign up
        </NavLink>
      </div>
    </div>
  </div>
);
