import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import * as Css from './MovieDetailsCSS';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const params = useParams();
  const movieId = params.movieId;

  const locationDetails = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setMovieData(data))
      .catch(err => console.error(err));
  }, [movieId]);

  const GenresArr = movieData.genres;

  return (
    <Suspense>
      <Css.GoBackLink to={locationDetails.state?.from ?? '/'}>
        &larr; Go back
      </Css.GoBackLink>
      <Css.Movie>
        <img
          height="300"
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
              : require('img/poster.jpg')
          }
          alt="poster"
        />

        <Css.Description>
          <h1>
            {movieData.title}({movieData.release_date})
          </h1>
          <p>User score: {movieData.vote_average}</p>
          <h2>Overview </h2>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <Css.Genres>
            {GenresArr?.map(({ id, movieData }) => (
              <Css.GenresLi id={id} key={id}>
                {movieData}
              </Css.GenresLi>
            ))}
          </Css.Genres>
        </Css.Description>
      </Css.Movie>
      <Css.InfoBox>
        <p>Additional infomation</p>
        <Css.Info>
          <Link to="cast" state={locationDetails.state}>
            Cast
          </Link>
          <Link to="reviews" state={locationDetails.state}>
            Reviews
          </Link>
        </Css.Info>
      </Css.InfoBox>
      <Outlet />
    </Suspense>
  );
};

export default MovieDetails;
