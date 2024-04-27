import { Grid, Typography } from '@mui/material';

export const NotFound = () => (
  <Grid
    container
    height="100vh"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
  >
    <Grid item>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page not found</Typography>
    </Grid>
  </Grid>
);
