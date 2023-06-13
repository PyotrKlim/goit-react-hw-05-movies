import React from 'react';
import { Link } from 'react-router-dom';

const HomeItem = ({ title, id }) => {
  if (title) {
    return (
      <Link to={`/movies/${id}`}>
        <li id={id}>{title}</li>
      </Link>
    );
  }
};

export default HomeItem;
