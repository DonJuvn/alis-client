import { useGoogleLogin } from '@react-oauth/google';
import { Google } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authorizeUser } from '../store/UserSlice';

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      dispatch(authorizeUser(codeResponse));
      navigate('/settings', { replace: true });
    },
    onError: error => console.log('Login Failed:', error),
  });

  return (
    <div className="auth">
      <div className="auth-form">
        <h2>Войдите что бы продолжить</h2>
        <button className="auth-button" onClick={login}>
          <Google />
          Sign in with Google 🚀
        </button>
      </div>
    </div>
  );
}
export default Auth;
