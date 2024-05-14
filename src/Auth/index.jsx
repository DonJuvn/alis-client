import { useGoogleLogin } from '@react-oauth/google';
import { Facebook, Google } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authorizeUser } from '../store/UserSlice';

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      dispatch(authorizeUser(codeResponse));
      navigate('/home', { replace: true });
    },
    onError: error => console.log('Login Failed:', error),
  });

  return (
    <div className="auth">
      <div className="auth-form">
        <div className="auth-text">
          <h2>Авторизация</h2>
          <p>Войдите что бы продолжить</p>
        </div>
        <hr />
        <div className="auth-button-wrapper">
          <button className="auth-button" onClick={login}>
            <Google />
            Sign in with Google 🚀
          </button>
          <button className="auth-button" onClick={login}>
            <Facebook />
            Sign in with Facebook 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
export default Auth;
