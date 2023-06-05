import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({ isLoggedIn: false });

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const contextValue = { isLoggedIn, setIsLoggedIn, token, setToken };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
