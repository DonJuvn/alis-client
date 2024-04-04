import { useState, useMemo, createContext, useContext } from 'react';
import { createTheme, CssBaseline } from '@mui/material';

export const ThemeContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <CssBaseline />
      {children}
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
