import { Box, Paper, Switch } from '@mui/material';
import { useTheme } from '../../utils/Theme';

export const Settings = () => {
  const { handleThemeChange } = useTheme();
  return (
    <Box flexDirection="row">
      <Paper>
        <p>Theme</p>
        <Switch
          onChange={handleThemeChange}
          defaultChecked={handleThemeChange}
        />
      </Paper>
    </Box>
  );
};
