import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Conteiner = styled.div`
  padding: 14px;
`;

const Layout = () => {
  return (
    <Conteiner>
      <Header />
      <Outlet />
    </Conteiner>
  );
};

export default Layout;
