import { CssBaseline } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Auth from './Auth';
import { NotFound } from './pages/NotFound';
import { ErrorPage } from './pages/ErrorPage';
import { MainLayout } from './layout/MainLayout';
import { ThemeProvider } from './layout/ThemeProvider';

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();

  const isAuthorized = useSelector(state => state.user.isAuthorized);

  useEffect(() => {
    if (!isAuthorized) navigate('../login', { replace: true });
  }, [isAuthorized]);

  return (
    <ThemeProvider>
      <CssBaseline />
      <Routes>
        <Route
          exact
          path="/login"
          name="Login Page"
          element={
            <GoogleOAuthProvider clientId={clientId}>
              <Auth />
            </GoogleOAuthProvider>
          }
        />
        <Route exact path="/500" name="Page 500" element={<ErrorPage />} />
        <Route path="/404" name="Page 404" element={<NotFound />} />
        <Route path="/*" name="Home" element={<MainLayout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
