import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from './useAuth';
import { useSnackbar } from 'notistack';

const Authenticate = ({ isNewUser = false }) => {
  const { signUp, logIn } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [isSignup, setIsSignUp] = useState(isNewUser);
  const navigate = useNavigate();
  const location = useLocation();

  const successCallback = () => {
    const redirectTo = location.state?.from?.pathname || '/';
    navigate(redirectTo);
  };

  const handleTestLogin = () => {
    const email = 'adarshbalika@gmail.com';
    const password = 'adarshbalika';

    const emailEl = document.getElementById('input-email');
    const passwordEl = document.getElementById('input-password');

    const payload = {
      email,
      password,
    };

    emailEl.value = email;
    passwordEl.value = password;

    setTimeout(() => logIn(payload, successCallback), 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    if (isSignup) {
      payload.firstName = e.target[3].value;
      payload.lastName = e.target[4].value;

      if (e.target[1].value !== e.target[2].value) {
        enqueueSnackbar('Passwords do not match!');
        return;
      }
      signUp(payload, successCallback);
    } else logIn(payload, successCallback);
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input type="email" required id="input-email" />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" required id="input-password" />
          </label>
          {isSignup && (
            <>
              <label>
                <span>Confirm password:</span>
                <input type="password" required />
              </label>
              <label>
                <span>First name:</span>
                <input type="text" required />
              </label>
              <label>
                <span>Last name:</span>
                <input type="text" required />
              </label>
            </>
          )}
          <button type="submit" className="btn-submit">
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
          {!isSignup && (
            <button
              type="btn"
              className="btn-submit --outline"
              onClick={handleTestLogin}
            >
              Sign in with test credentials
            </button>
          )}
          <div className="login-nudge">
            {isSignup ? (
              <p>
                Already registered?{' '}
                <span onClick={() => setIsSignUp((state) => !state)}>
                  Log in
                </span>{' '}
                instead
              </p>
            ) : (
              <p>
                New user?{' '}
                <span onClick={() => setIsSignUp((state) => !state)}>
                  Sign up
                </span>{' '}
                instead
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Authenticate;
