import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;
const Navs = styled.nav`
  display: flex;
  border-bottom: 1px solid grey;
  box-shadow: grey 0px 2px 4px;
`;
const Nav = styled.div`
  padding: 14px;
`;

const Header = () => {
  return (
    <Navs>
      <Nav className="navbar-nav">
        <StyledLink className="nav-link" aria-current="page" to="/">
          Home
        </StyledLink>
      </Nav>
      <Nav className="navbar-nav">
        <StyledLink className="nav-link" to="/movies">
          Movies
        </StyledLink>
      </Nav>
    </Navs>
  );
};
export default Header;
