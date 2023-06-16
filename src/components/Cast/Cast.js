import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import Container from './CastCSS';

const Cast = () => {
  const [nameCast, setNameCast] = useState({});

  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    fetchCast(movieId)
      .then(data => setNameCast(data))
      .catch(err => console.error(err));
  }, [movieId]);

  const castArr = nameCast.cast;

  return (
    <Container>
      {castArr?.map(({ character, name, profile_path, id }) => (
        <div key={id}>
          <img
            height="100"
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : require('img/poster.jpg')
            }
            alt="poster"
          />
          <p>{name}</p>
          <p>Charter: {character}</p>
        </div>
      ))}
    </Container>
  );
};

export default Cast;
