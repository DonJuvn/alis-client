import { Route, Routes } from 'react-router-dom';

// routes config
import routes from '../routes';

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
            element={route.element}
          />
        );
      })}
    </Routes>
  );
};

export default MainContent;
