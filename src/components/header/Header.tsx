import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from 'assets/icons/logo.svg';
import { PATH } from 'common/enums/patch';
import s from 'components/header/style.module.scss';

export const Header = () => (
  <div className="container">
    <div className={s.wrapper}>
      <NavLink to={PATH.BANNER}>
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={s.wrapperNavigate}>
        <NavLink to={PATH.USERS} className="btn">
          Users
        </NavLink>
        <NavLink to={PATH.FORM} className="btn">
          Sign up
        </NavLink>
      </div>
    </div>
  </div>
);
