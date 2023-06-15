import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { optionsReguest } from 'service/optionsRequest';
import styled from 'styled-components';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Movie = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid grey;
  box-shadow: grey 0px 2px 4px;
`;
const Genres = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
`;
const GenresLi = styled.li`
  margin-right: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const InfoBox = styled.div`
  border-bottom: 1px solid grey;
  box-shadow: grey 0px 2px 4px;
  padding: 10px;
`;

const MovieDetails = () => {
  const [name, setName] = useState({});

  const locationDetails = useLocation();

  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      optionsReguest
    )
      .then(response => {
        return response.json();
      })
      .then(data => setName(data))
      .catch(err => console.error(err));
  }, [movieId]);

  const GenresArr = name.genres;

  return (
    <>
      <Link to={locationDetails.state?.pathname}>
        <button>&larr; Go back</button>
      </Link>
      <Movie>
        <img
          height="300"
          src={`https://image.tmdb.org/t/p/w500/${name.poster_path}`}
          alt="poster"
        />
        <Description>
          <h1>
            {name.title}({name.release_date})
          </h1>
          <p>User score: {name.vote_average}</p>
          <h2>Overview </h2>
          <p>{name.overview}</p>
          <h3>Genres</h3>
          <Genres>
            {GenresArr?.map(({ id, name }) => (
              <GenresLi id={id} key={id}>
                {name}
              </GenresLi>
            ))}
          </Genres>
        </Description>
      </Movie>
      <InfoBox>
        <p>Additional infomation</p>
        <Info>
          <Link to="cast" state={locationDetails.state}>
            Cast
          </Link>
          <Link to="reviews" state={locationDetails.state}>
            Reviews
          </Link>
        </Info>
      </InfoBox>
      <Outlet />
    </>
  );
};

export default MovieDetails;
