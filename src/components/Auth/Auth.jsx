import { Google } from '@mui/icons-material';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { authorizeUser } from '../../store/UserSlice';

function Auth() {
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      console.log(codeResponse);
      dispatch(authorizeUser(codeResponse));
      return codeResponse;
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
