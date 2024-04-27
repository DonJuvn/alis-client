import { Suspense } from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

import { Sidebar } from '../components/Sidebar';
import MainContent from './MainContent';

export const MainLayout = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Box height="100%">
        <Stack direction="row" width="100%" height="95vh" m={2}>
          <Sidebar />
          <Box mx={2} sx={{ minWidth: '100%' }}>
            <MainContent />
          </Box>
        </Stack>
      </Box>
    </Suspense>
  );
};
