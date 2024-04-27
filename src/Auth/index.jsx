import { useGoogleLogin } from '@react-oauth/google';
import { Google } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authorizeUser } from '../store/UserSlice';
import { useEffect } from 'react';

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthorized = useSelector(state => state.user.isAuthorized);

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      console.log(codeResponse);
      dispatch(authorizeUser(codeResponse));
      return codeResponse;
    },
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (isAuthorized) navigate('/documents');
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
