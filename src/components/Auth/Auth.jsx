import { Google } from '@mui/icons-material';
import useAuth from './UseAuth';

function Auth() {
  const login = useAuth();

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
