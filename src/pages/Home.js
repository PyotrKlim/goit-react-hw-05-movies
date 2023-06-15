import { useState } from 'react';
import { useEffect } from 'react';
import HomeItem from '../components/HomeItem';
import { optionsReguest } from 'service/optionsRequest';

const HomePage = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      optionsReguest
    )
      .then(response => {
        return response.json();
      })
      .then(data => setName(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <ul>
        {name.map(({ id, title }) => (
          <HomeItem title={title} id={id} key={id} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
