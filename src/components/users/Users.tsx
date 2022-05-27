import React, { useEffect } from 'react';

import preloader from 'assets/icons/preloader.svg';
import { Button } from 'common/button/Button';
import { ModalError } from 'common/modalError/ModalError';
import s from 'components/users/style.module.scss';
import { User } from 'components/users/user/User';
import { useAppSelector } from 'hooks/useAppSelectorHook';
import { getUsersTC, setCurrentPage } from 'store/reducer/user/user-reducer';
import {
  selectCount,
  selectErrorMessage,
  selectIsInitialized,
  selectPage,
  selectTotalPages,
  selectUsers,
} from 'store/selectors/selectors';
import { useTypedDispatch } from 'store/store';

const FIRST_PAGE_USER = 1;

export const Users = () => {
  const dispatch = useTypedDispatch();

  const users = useAppSelector(selectUsers);
  const page = useAppSelector(selectPage);
  const count = useAppSelector(selectCount);
  const totalPages = useAppSelector(selectTotalPages);
  const isInitialized = useAppSelector(selectIsInitialized);
  const errorMessage = useAppSelector(selectErrorMessage);

  const onButtonNextPage = () => {
    const numberPage = page + FIRST_PAGE_USER;
    dispatch(setCurrentPage(numberPage));
  };

  const lastUserPage = totalPages !== page;

  useEffect(() => {
    dispatch(getUsersTC(page, count));
  }, [dispatch, page]);

  return (
    <div className="container">
      {errorMessage && <ModalError />}

      <h1 className="title">Working with GET request</h1>
      <div className={s.users__wrapper}>
        <User users={users} />

        {isInitialized && <img className="preloader" src={preloader} alt="preloader" />}
      </div>
      <div className={s.users__wrapper_link}>
        {lastUserPage && (
          <Button onClick={onButtonNextPage} className="btn">
            Show more
          </Button>
        )}
      </div>
    </div>
  );
};
