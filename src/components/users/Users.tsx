import React, {useEffect} from 'react';

import {useAppSelector} from "common/hook/useAppSelectorHook";
import s from 'components/users/style.module.scss'
import {User} from "components/users/user/User";
import {getUsersTC} from "store/reducer/user/user-reducer";
import {selectUsers} from "store/selectors/selectors";
import {useTypedDispatch} from "store/store";
import {fixLengthText} from "utils/fixLengthText";

export const Users = () => {

    const dispatch = useTypedDispatch()

    const users = useAppSelector(selectUsers)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [])

    return (
        <div className="container">
            <h1 className={s.users__title}>Working with GET request</h1>
            <div  className={s.users__wrapper}>
                {users.map(user => (
                        <User key={user.id} phone={user.phone} email={fixLengthText(user.email)} name={fixLengthText(user.name)} position={user.position}
                              photo={user.photo}/>

                    )
                )}
            </div>
        </div>
    );
};

