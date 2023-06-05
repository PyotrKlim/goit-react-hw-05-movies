import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/movies/:movieId">MovieDetails</NavLink>
        </li>
        <li>
          <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="/:movieId/reviews">Reviews</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/:movieId/reviews" element={<div>Reviews</div>} />
      </Routes>
    </div>
  );
};
