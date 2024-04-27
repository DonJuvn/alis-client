import { createContext } from 'react';
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';

export const ThemeContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#261E35',
        paper: '#261E35',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ theme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
