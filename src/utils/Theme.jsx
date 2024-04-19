import { createContext, useContext } from 'react';
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

    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <CssBaseline sx={{
        '&.Mui-selected':{    
        }
      }} />
      {children}

    <ThemeContext.Provider value={{ theme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
