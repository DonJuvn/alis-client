import { Paper, Switch } from '@mui/material';
import { useTheme } from '@utils/Theme';

export const Settings = () => {
  const { theme, handleThemeChange } = useTheme();
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <p>Dark Theme</p>
      <Switch
        onChange={handleThemeChange}
        defaultChecked={theme.palette.mode == 'dark'}
      />
    </Paper>
  );
};
