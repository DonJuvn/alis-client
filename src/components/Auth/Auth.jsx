import { useEffect, useState } from 'react';
import { Button, Paper } from '@mui/material';
import { Google } from '@mui/icons-material';
import styles from './auth.module.css';

const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => window.gapi.load('client:auth2', initClient);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initClient = () => {
    window.gapi.client
      .init({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY, // Make sure to replace with your actual API key
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Make sure to replace with your actual client ID
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        ],
        scope: 'https://www.googleapis.com/auth/drive.file',
      })
      .then(
        () => {
          // Listen for sign-in state changes.
          window.gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(
            window.gapi.auth2.getAuthInstance().isSignedIn.get(),
          );
        },
        error => {
          console.error('Error loading Google API', error);
        },
      );
  };

  const handleAuthClick = event => {
    event.preventDefault(); // Prevent form submission
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const updateSigninStatus = isSignedInStatus => {
    setIsSignedIn(isSignedInStatus);
    if (isSignedInStatus) {
      alert('You have successfully signed in!');
    }
  };

  return (
    <Paper className="flex items-center justify-center min-h-screen">
      <div className="rounded-xl shadow-2xl p-6 m-4 bg-inherit flex flex-col items-center justify-center w-[600px] h-[700px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Авторизация</h2>
        <Button
          onClick={handleAuthClick}
          variant="contained"
          color="primary"
          className={styles.button}
          startIcon={<Google />}
          style={{ width: '200px', color: 'white' }}
        >
          Авторизация
        </Button>
      </div>
    </Paper>
  );
};

export default Auth;
