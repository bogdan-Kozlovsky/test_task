import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { PATH_NAVIGATION } from 'common/enums/navigation';
import { Banner } from 'components/banner/Banner';
import { Error404 } from 'components/error404/Error404';
import { Form } from 'components/form/Form';
import { Header } from 'components/header/Header';
import { Users } from 'components/users/Users';

export const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path={PATH_NAVIGATION.BANNER} element={<Banner />} />
      <Route path={PATH_NAVIGATION.USERS} element={<Users />} />
      <Route path={PATH_NAVIGATION.FORM} element={<Form />} />
      <Route path={PATH_NAVIGATION.NOT_PAGE_FOUND} element={<Error404 />} />
      <Route path="*" element={<Navigate to="404" />} />
    </Routes>
  </div>
);
