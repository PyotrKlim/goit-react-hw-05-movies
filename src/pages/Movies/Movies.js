import { useCustomContext } from 'Context/Context';
import { MovieList } from 'components/MovieList';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'services/api';
import { Form } from './MoviesCSS';

const Movies = () => {
  const { reguestText, setReguestText, data, setData } = useCustomContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('query');

  useEffect(() => {
    if (!searchName) return;
    fetchMoviesByName(reguestText)
      .then(data => setData(data.results))
      .catch(err => console.error(err));
  }, [searchName, setData, reguestText]);

  const handleChange = ({ target: { value } }) => {
    setReguestText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = reguestText.toLowerCase().trim();

    if (!query) {
      return;
    }

    setSearchParams({ query: reguestText });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          value={reguestText}
          onChange={handleChange}
          name="name"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie title search"
        />
        <button type="submit">Search</button>
      </Form>
      {data.length > 0 && <MovieList movies={data} />}
    </>
  );
};
export default Movies;
