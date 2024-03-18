import { Grid, Typography } from '@mui/material';

export const ErrorPage = () => (
  <Grid
    container
    height="100vh"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
  >
    <Grid item>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="h2">Something went wrong</Typography>
    </Grid>
  </Grid>
);
