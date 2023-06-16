import React, { useContext, useState } from 'react';

const ContextAlert = React.createContext();

export const useCustomContext = () => {
  return useContext(ContextAlert);
};

const Context = ({ children }) => {
  const [reguestText, setReguestText] = useState('');
  const [data, setData] = useState([]);
  return (
    <ContextAlert.Provider
      value={{
        reguestText: reguestText,
        setReguestText: setReguestText,
        data: data,
        setData: setData,
      }}
    >
      {children}
    </ContextAlert.Provider>
  );
};

export default Context;
