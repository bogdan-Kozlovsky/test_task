import React from 'react';

import {NavLink} from "react-router-dom";

import banner from 'assets/images/banner.jpg';
import s from 'components/banner/style.module.scss'

export const Banner = () => (
    <div className={`${s.wrapper} container`} style={{backgroundImage: `url(${banner})`}}>
        <div className={s.description}>
            <h1 className={s.description__title}>
                Test assignment for front-end developer
            </h1>
            <p className={s.description__text}>
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                They should also be excited to learn, as the world of Front-End Development keeps evolving.
            </p>
            <NavLink to="/form" className='btn'>Sign up</NavLink>
        </div>
    </div>
);
