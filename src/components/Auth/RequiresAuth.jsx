import { useAuthContext } from '../../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequiresAuth;
