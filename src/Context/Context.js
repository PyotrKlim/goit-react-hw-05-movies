import React, { useContext, useState } from 'react';

const ContextAlert = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextAlert);
};

const Context = ({ children }) => {
  const [movies, setMovies] = useState('');
  const [data, setData] = useState([]);
  return (
    <ContextAlert.Provider
      value={{
        movies: movies,
        setMovies: setMovies,
        data: data,
        setData: setData,
      }}
    >
      {children}
    </ContextAlert.Provider>
  );
};

export default Context;
