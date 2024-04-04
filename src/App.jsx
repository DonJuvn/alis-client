import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { ThemeProvider } from './utils/Theme';
import { CssBaseline } from '@mui/material';


function App() {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>

  
    </>
  );
}

export default App;
