import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { MovieList } from 'components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
