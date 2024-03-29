import './shared.css';
import { useAuthContext } from '../../contexts/AuthContext';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, setToken } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="app-header-container">
      <div className="logo" onClick={() => navigate('/')}>
        kB
      </div>
      <div className="search"></div>
      <div className="user-actions">
        <div onClick={() => navigate('/wishlist')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="header-icon"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
        <div onClick={() => navigate('/cart')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="header-icon"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </div>
        {isLoggedIn ? (
          <div className="login-btn" onClick={() => setToken(null)}>
            Log out
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
