import { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, setAccessToken } from '../../store/UserSlice';

function Auth() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      setUser(codeResponse);
      localStorage.setItem('accessToken', codeResponse.access_token);
      dispatch(setAccessToken(codeResponse.access_token)); // сохранение токена
    },
    onError: error => console.log('Login Failed:', error),
  });

  // Войти по токену
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          },
        )
        .then(res => {
          localStorage.setItem('userEmail', res.data.email);
          dispatch(setEmail(res.data.email)); // сохранение email
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  return (
    <div>
      <h2>Войдите что бы продолжить</h2>
      <button className="auth-button" onClick={() => login()}>
        <Google />
        Sign in with Google 🚀
      </button>
    </div>
  );
}
export default Auth;
