import { useCustomContext } from 'Context/Context';

import { optionsReguest } from 'service/optionsRequest';

const Movies = () => {
  const { movies, setMovies } = useCustomContext();
  const { data, setData } = useCustomContext();

  const handleChange = e => {
    const { value } = e.currentTarget;
    setMovies(value);
  };

  const onSubmit = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,
      optionsReguest
    )
      .then(response => {
        return response.json();
      })
      .then(data => setData(data.results))
      .catch(err => console.error(err));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = movies.toLowerCase().trim();

    if (!query) {
      return;
    }

    onSubmit(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={movies}
          onChange={handleChange}
          name="name"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie title search"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {data.length > 0 && (
        <ul>
          {data.map(({ id, title }) => (
            <li id={id} key={id}>
              {title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
