import styled from 'styled-components';

const { NavLink } = require('react-router-dom');

export const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;
export const Navs = styled.nav`
  display: flex;
  border-bottom: 1px solid grey;
  box-shadow: grey 0px 2px 4px;
  margin-bottom: 8px;
`;
export const Nav = styled.div`
  padding: 14px;
`;
