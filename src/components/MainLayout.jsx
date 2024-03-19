import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CircularProgress, Stack, Toolbar } from '@mui/material';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Breadcrumbs } from '../utils/BreadCrumbs';
import { SidebarProvider } from './Sidebar/useSidebar';

export const MainLayout = () => (
  <SidebarProvider>
    <Header />
    <Suspense fallback={<CircularProgress />}>
      <Box>
        <Stack direction="row">
          <Sidebar />
          <Box flex={1}>
            <Toolbar />
            <Box m={2}>
              <Breadcrumbs />
              <Outlet />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Suspense>
  </SidebarProvider>
);
