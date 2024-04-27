import { CssBaseline } from '@mui/material';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Auth from './Auth';
import { NotFound } from './pages/NotFound';
import { ErrorPage } from './pages/ErrorPage';
import { MainLayout } from './layout/MainLayout';

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <HashRouter>
      <CssBaseline />
      <GoogleOAuthProvider clientId={clientId}>
        <Auth />
      </GoogleOAuthProvider>
      <Routes>
        <Route path="/*" name="Home" element={<MainLayout />} />
        <Route exact path="/login" name="Login Page" element={<Auth />} />
        <Route exact path="/500" name="Page 500" element={<ErrorPage />} />
        <Route path="/404" name="Page 404" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
