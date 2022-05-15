import React from 'react';

import s from 'components/users/user/style.module.scss'

type propsType = {
    phone: string
    email: string
    name: string
    position: string
    photo: string
}
export const User = (props: propsType) => {
    const {name, phone, position, photo, email} = props
    return (
        <div className={s.user__item}>
            <img className={s.user__avatar} src={photo} alt="avatar"/>
            <p className={s.user__name}>{name}</p>
            <p className={s.user__position}>{position}</p>
            <p className={s.user__email}>{email}</p>
            <p className={s.user__phone}>{phone}</p>
        </div>
    );
};

