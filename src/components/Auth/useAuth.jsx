import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackbar } from 'notistack';

const noop = () => {};

const useAuth = () => {
  const { setToken } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const logIn = (payload, successCb = noop) => {
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.encodedToken) {
          setToken(data.encodedToken);
          successCb();
        }
        if (data.errors) enqueueSnackbar(data.errors[0], 'error');
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const signUp = (payload, successCb = noop) => {
    console.log('PAY', payload);
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.encodedToken) {
          setToken(data.encodedToken);
          enqueueSnackbar('signup successful!');
          successCb();
        }
        if (data.errors) enqueueSnackbar(data.errors[0]);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return {
    logIn,
    signUp,
  };
};

export { useAuth };
