import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Conteiner from './LayoutCSS';

const Layout = () => {
  return (
    <Conteiner>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};

export default Layout;
