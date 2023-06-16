import * as Css from './HeaderCSS';

const Header = () => {
  return (
    <Css.Navs>
      <Css.Nav className="navbar-nav">
        <Css.StyledLink className="nav-link" aria-current="page" to="/">
          Home
        </Css.StyledLink>
      </Css.Nav>
      <Css.Nav className="navbar-nav">
        <Css.StyledLink className="nav-link" to="/movies">
          Movies
        </Css.StyledLink>
      </Css.Nav>
    </Css.Navs>
  );
};
export default Header;
