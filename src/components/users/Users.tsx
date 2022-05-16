import React, {useEffect} from 'react';

import preloader from 'assets/icons/preloader.svg'
import {useAppSelector} from "common/hook/useAppSelectorHook";
import s from 'components/users/style.module.scss'
import {User} from "components/users/user/User";
import {getUsersTC, setCurrentPage} from "store/reducer/user/user-reducer";
import {selectCount, selectInitialized, selectPage, selectTotalPages, selectUsers} from "store/selectors/selectors";
import {useTypedDispatch} from "store/store";
import {fixLengthText} from "utils/fixLengthText";

export const Users = () => {

    const dispatch = useTypedDispatch()

    const users = useAppSelector(selectUsers)
    const page = useAppSelector(selectPage)
    const count = useAppSelector(selectCount)
    const totalPages = useAppSelector(selectTotalPages)
    const initialized = useAppSelector(selectInitialized)

    useEffect(() => {
        dispatch(getUsersTC(page, count))
    }, [dispatch, page])

    const handlePageChange = () => {
        const number = 1;
        dispatch(setCurrentPage(page + number));
    };
    return (
        <div className="container">
            <h1 className={s.users__title}>Working with GET request</h1>
            <div className={s.users__wrapper}>
                {users.map(user => (
                        <User key={user.id} phone={user.phone} email={fixLengthText(user.email)}
                              name={fixLengthText(user.name)} position={user.position}
                              photo={user.photo}/>

                    )
                )}
                {initialized && <img className='preloader' src={preloader} alt="preloader"/>}
            </div>
            <div className={s.users__wrapper_link}>
                {totalPages !== page && <button onClick={handlePageChange} className='btn'>Show more</button>}
            </div>
        </div>
    );
};

