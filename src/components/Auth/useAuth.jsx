import { useAuthContext } from '../../contexts/AuthContext';

const useAuth = () => {
  const logIn = (payload) => {
    console.log(payload);
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return {
    logIn,
  };
};

export { useAuth };
