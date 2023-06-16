import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { Container } from './ReviewsCSS';

const Reviews = () => {
  const [nameReviews, setNameReviews] = useState({});

  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    fetchReviews(movieId)
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
