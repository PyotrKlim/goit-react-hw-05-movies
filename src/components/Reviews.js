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

const Reviews = () => {
  const [nameReviews, setNameReviews] = useState({});

  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      optionsReguest
    )
      .then(response => {
        return response.json();
      })
      .then(data => setNameReviews(data))
      .catch(err => console.error(err));
  }, [movieId]);

  const reviewsArr = nameReviews.results;

  return (
    <Container>
      {reviewsArr?.map(({ author, content, id }) => (
        <div key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </div>
      ))}

      {reviewsArr?.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </Container>
  );
};

export default Reviews;
