import './shared.css';
import { useAuthContext } from '../../contexts/AuthContext';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="app-header-container">
      <div className="logo"></div>
      <div className="search"></div>
      <div className="user-actions">
        {isLoggedIn ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="header-icon"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div onClick={() => navigate('/login')} className="login-btn">
            Log in
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
