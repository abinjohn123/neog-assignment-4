import { useAuthContext } from '../../contexts/AuthContext';

const useAuth = () => {
  const { setToken } = useAuthContext();
  const logIn = (payload) => {
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.encodedToken) setToken(data.encodedToken);
      })
      .catch((err) => console.log(err));
  };

  const signUp = (payload) => {
    console.log('PAY', payload);
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.encodedToken) setToken(data.encodedToken);
      })
      .catch((err) => console.log(err));
  };

  return {
    logIn,
    signUp,
  };
};

export { useAuth };
