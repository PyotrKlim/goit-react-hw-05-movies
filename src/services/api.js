const BASE_URL = 'https://api.themoviedb.org/3';

const optionsReguest = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FjNzZiYTMwNTk3NTY2NzI1YzBlZTA2NzgwOTU2NCIsInN1YiI6IjY0N2U2NjIxY2Y0YjhiMDBlMmQ2ZjI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OJYK009rGH_uxupdpxNNfOx0VK9mH-ozlusPwWtBbkw',
  },
};

export const fetchTrending = () => {
  return fetch(
    BASE_URL + '/trending/movie/day?language=en-US',
    optionsReguest
  ).then(response => {
    return response.json();
  });
};

export const fetchCast = movieId => {
  return fetch(
    BASE_URL + `/movie/${movieId}/credits?language=en-US`,
    optionsReguest
  ).then(response => {
    return response.json();
  });
};

export const fetchReviews = movieId => {
  return fetch(
    BASE_URL + `/movie/${movieId}/reviews?language=en-US&page=1`,
    optionsReguest
  ).then(response => {
    return response.json();
  });
};

export const fetchMovieDetails = movieId => {
  return fetch(
    BASE_URL + `/movie/${movieId}?language=en-US`,
    optionsReguest
  ).then(response => {
    return response.json();
  });
};

export const fetchMoviesByName = movies => {
  return fetch(
    BASE_URL +
      `/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,
    optionsReguest
  ).then(response => {
    return response.json();
  });
};
