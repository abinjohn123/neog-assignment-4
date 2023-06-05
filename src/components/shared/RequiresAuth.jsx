import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
