import React from 'react';

const HomeItem = ({ title, id }) => {
  if (title) {
    return <li id={id}>{title}</li>;
  }
};

export default HomeItem;
