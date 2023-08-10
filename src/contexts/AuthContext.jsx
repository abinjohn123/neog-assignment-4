import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({ isLoggedIn: false });

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      localStorage.setItem('token', token);
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
