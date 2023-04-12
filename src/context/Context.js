import { createContext, useState } from 'react';

const MovieItem = createContext();

const ProfileContext = ({ children }) => {
  const [profile, setProfile] = useState([]);

  return (
    <MovieItem.Provider value={{ profile, setProfile }}>
      {children}
    </MovieItem.Provider>
  );
};

export { MovieItem, ProfileContext };
