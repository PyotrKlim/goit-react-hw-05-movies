import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies/:movieId">MovieDetails</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies/:movieId/cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="/:movieId/reviews">Reviews</StyledLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/:movieId/reviews" element={<div>Reviews</div>} />
      </Routes>
    </div>
  );
};
