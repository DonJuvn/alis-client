import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import themes from '../constants/themes';

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const theme = createTheme(themes[selectedTheme]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
