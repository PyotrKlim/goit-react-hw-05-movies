import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path=":movieId/reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
