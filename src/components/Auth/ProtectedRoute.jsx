import { useNavigate } from 'react-router-dom';
import { router } from '../../routes';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {
  const navigate = useNavigate();

  navigate('/settings');

  return;
};

export default ProtectedRoute;
