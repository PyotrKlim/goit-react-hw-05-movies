import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Conteiner from './LayoutCSS';

const Layout = () => {
  return (
    <Conteiner>
      <Header />
      <Outlet />
    </Conteiner>
  );
};

export default Layout;
