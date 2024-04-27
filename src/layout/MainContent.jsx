import { Route, Routes } from 'react-router-dom';

// routes config
import routes from '../routes';
import ProtectedRoute from '../routes/ProtectedRoute';

const MainContent = () => {
  return (
    <Routes>
      {routes.map((route, idx) => {
        return (
          <Route
            key={idx}
            path={route.path}
            name={route.name}
            exact={true}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        );
      })}
    </Routes>
  );
};

export default MainContent;
