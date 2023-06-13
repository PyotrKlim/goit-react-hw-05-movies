import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { optionsReguest } from 'service/optionsRequest';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid grey;
  box-shadow: grey 0px 2px 4px;
  flex-direction: column;
  padding: 10px;
`;

const Cast = () => {
  const [nameCast, setNameCast] = useState({});

  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      optionsReguest
    )
      .then(response => {
        return response.json();
      })
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
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
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
