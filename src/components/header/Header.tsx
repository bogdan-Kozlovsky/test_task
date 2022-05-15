import React from 'react';

import {NavLink} from 'react-router-dom';

import logo from 'assets/icons/logo.svg'
import s from 'components/header/style.module.scss';

export const Header = () => (
    <div className='container'>
        <div className={s.wrapper}>
            <NavLink to="/">
                <img className={s.logo} src={logo} alt="logo"/>
            </NavLink>
            <div className={s.wrapperNavigate}>
                <NavLink to="/users" className='btn'>Users</NavLink>
                <NavLink to="/form" className='btn'>Sign up</NavLink>
            </div>
        </div>
    </div>
);
