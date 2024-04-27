import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
  isAuthorized,
  redirectPath = '/login',
  children,
}) => {
  const isLoading = true;

  if (!isAuthorized) {
    return <Navigate to={redirectPath} replace />;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  isAuthorized: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProtectedRoute;
