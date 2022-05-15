import React from 'react';

import logo from 'assets/icons/logo.svg'
import s from 'components/header/style.module.scss';

export const Header = () => (
    <div className='container'>
        <div className={s.wrapper}>
            <img className={s.logo} src={logo} alt="logo"/>
            <div className={s.wrapperNavigate}>
                <button className='btn'>Users</button>
                <button className='btn'>Sign up</button>
            </div>
        </div>
    </div>
);
