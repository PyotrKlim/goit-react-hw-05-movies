import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={location}>
        {title}
      </Link>
    </li>
  );
};

export default HomeItem;
