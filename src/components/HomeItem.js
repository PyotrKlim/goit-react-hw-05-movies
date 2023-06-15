import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeItem = ({ title, id }) => {
  const locationHomItem = useLocation();

  if (title) {
    return (
      <Link to={`/movies/${id}`} state={locationHomItem}>
        <li id={id}>{title}</li>
      </Link>
    );
  }
};

export default HomeItem;
