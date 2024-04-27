import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isAuthorized = useSelector(state => state.user.isAuthorized);
  const isAuthLoading = useSelector(state => state.user.isLoading);

  if (isAuthLoading) return <h1>Loading</h1>;

  if (!isAuthorized) {
    return <Navigate to={'./login'} replace />;
  }

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProtectedRoute;
