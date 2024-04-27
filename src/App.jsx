import { ThemeProvider } from './utils/Theme';
import { CssBaseline } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useSelector } from 'react-redux';
import Auth from './components/Auth/Auth';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Settings } from './components/Settings/Settings';
import { useEffect } from 'react';

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();

  const isAuthorized = useSelector(state => state.user.isAuthorized);

  useEffect(() => {
    isAuthorized && navigate('/settings');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ThemeProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <CssBaseline />
          {isAuthorized ? (
            <Routes>
              <Route path="./settings" element={<Settings />}></Route>
            </Routes>
          ) : (
            <Auth />
          )}
        </GoogleOAuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
