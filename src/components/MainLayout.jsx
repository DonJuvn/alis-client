import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CircularProgress, Stack } from '@mui/material';
import { Sidebar } from './Sidebar/Sidebar';
import { Breadcrumbs } from '../utils/BreadCrumbs';
import { SidebarProvider } from './Sidebar/useSidebar';

export const MainLayout = () => (
  <SidebarProvider>
    <Suspense fallback={<CircularProgress />}>
      <Box height="100%">
        <Stack direction="row" width="100%" height="95vh" m={2}>
          <Sidebar />
          <Box mx={2} sx={{ minWidth: '100%' }}>
            <Breadcrumbs />
            <Outlet />
          </Box>
        </Stack>
      </Box>
    </Suspense>
  </SidebarProvider>
);
