import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Banner } from 'components/banner/Banner';
import { Form } from 'components/form/Form';
import { Header } from 'components/header/Header';
import { PageNotFound } from 'components/pageNotFound/PageNotFound';
import { Users } from 'components/users/Users';
import { PathNavigation } from 'enums/NAVIGATION';

export const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path={PathNavigation.BANNER} element={<Banner />} />
      <Route path={PathNavigation.USER} element={<Users />} />
      <Route path={PathNavigation.FORM} element={<Form />} />
      <Route path={PathNavigation.PAGE_NOT_FOUND} element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={PathNavigation.PAGE_NOT_FOUND} />} />
    </Routes>
  </div>
);
