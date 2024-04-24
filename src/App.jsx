import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { ThemeProvider } from './utils/Theme';
import { CssBaseline } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  console.log(clientId);

  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <GoogleOAuthProvider clientId={clientId}>
            <CssBaseline />
            <RouterProvider router={router} />
          </GoogleOAuthProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
