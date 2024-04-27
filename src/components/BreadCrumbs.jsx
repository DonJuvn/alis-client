import { useMatches } from 'react-router-dom';
import { Box, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';

export const Breadcrumbs = () => {
  const matches = useMatches();
  const crumbs = matches
    .filter(match => {
      const handle = match.handle;
      return Boolean(handle?.crumb);
    })
    .map(match => {
      const handle = match.handle;
      return handle?.crumb(match.data);
    });

  if (crumbs.length === 0) {
    return null;
  }

  return (
    <MuiBreadcrumbs separator="›" sx={{ mb: 2 }}>
      {crumbs.map((crumb, index) => (
        <Box key={index}>{crumb}</Box>
      ))}
    </MuiBreadcrumbs>
  );
};
