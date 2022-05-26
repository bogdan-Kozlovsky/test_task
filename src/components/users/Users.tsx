import React, { useEffect } from 'react';

import preloader from 'assets/icons/preloader.svg';
import { ModalError } from 'common/modalError/ModalError';
import s from 'components/users/style.module.scss';
import { User } from 'components/users/user/User';
import { useAppSelector } from 'hooks/useAppSelectorHook';
import { getUsersTC, setCurrentPage } from 'store/reducer/user/user-reducer';
import {
  selectCount,
  selectErrorMessage,
  selectInitialized,
  selectPage,
  selectTotalPages,
  selectUsers,
} from 'store/selectors/selectors';
import { useTypedDispatch } from 'store/store';

export const Users = () => {
  const dispatch = useTypedDispatch();

  const users = useAppSelector(selectUsers);
  const page = useAppSelector(selectPage);
  const count = useAppSelector(selectCount);
  const totalPages = useAppSelector(selectTotalPages);
  const initialized = useAppSelector(selectInitialized);
  const error = useAppSelector(selectErrorMessage);

  const handlePageChange = () => {
    const number = 1;
    dispatch(setCurrentPage(page + number));
  };

  useEffect(() => {
    dispatch(getUsersTC(page, count));
  }, [dispatch, page]);

  return (
    <div className="container">
      {error && <ModalError />}
      <h1 className="title">Working with GET request</h1>
      <div className={s.users__wrapper}>
        <User users={users} />

        {initialized && <img className="preloader" src={preloader} alt="preloader" />}
      </div>
      <div className={s.users__wrapper_link}>
        {totalPages !== page && (
          <button onClick={handlePageChange} className="btn">
            Show more
          </button>
        )}
      </div>
    </div>
  );
};
