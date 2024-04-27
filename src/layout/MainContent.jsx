import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// routes config
import routes from '../routes';
import ProtectedRoute from '../routes/ProtectedRoute';

const MainContent = () => {
  const isAuthorized = useSelector(state => state.user.isAuthorized);

  return (
    <Routes>
      {routes.map((route, idx) => {
        return (
          <Route
            key={idx}
            path={route.path}
            name={route.name}
            exact={true}
            element={
              <ProtectedRoute isAuthorized={isAuthorized} redirectPath="/login">
                {route.element}
              </ProtectedRoute>
            }
          />
        );
      })}
    </Routes>
  );
};

export default MainContent;
