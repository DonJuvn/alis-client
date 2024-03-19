import {
  Box,
  Stack,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from './useNavigation';
import { useSidebar } from './useSidebar';
import { NoteAdd, Settings } from '@mui/icons-material';

const drawerWidth = 320;

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { menu } = useNavigation();
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <Drawer
      open={isOpen}
      variant="temporary"
      sx={{
        width: isOpen ? drawerWidth : 0,
        height: '100%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          padding: '30px 0px',
          boxSizing: 'border-box',
        },
      }}
      onClose={closeSidebar}
    >
      <img
        style={{
          display: 'flex',
          padding: '10px 10px',
        }}
        width="100px"
        height="100px"
        src="/imgLogo.png"
        alt=""
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        height="100%"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Box
          flex={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <List sx={{ padding: '0' }}>
            {menu.map(item => (
              <ListItemButton
                key={item.id}
                component={Link}
                to={item.link ?? ''}
                selected={pathname === item.link}
                sx={{
                  // padding: '8px 0',
                  '&.Mui-selected ': {
                    color: '#930B4D',
                    backgroundColor: 'transparent',
                  },
                  '&.Mui-selected .css-i4bv87-MuiSvgIcon-root': {
                    fill: '#930B4D',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
          <List>
            <ListItemButton
              component={Link}
              to="settings"
              selected={pathname === 'settings'}
              sx={{
                '&.Mui-selected ': {
                  color: 'red',
                  backgroundColor: 'transparent',
                },
                '&.Mui-selected .css-i4bv87-MuiSvgIcon-root': {
                  fill: 'red',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Настройки" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="generation"
              selected={pathname === 'generation'}
              sx={{
                '&.Mui-selected ': {
                  color: 'red',
                  backgroundColor: 'transparent',
                },
                '&.Mui-selected .css-i4bv87-MuiSvgIcon-root': {
                  fill: 'red',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <NoteAdd />
              </ListItemIcon>
              <ListItemText primary="Генерация" />
            </ListItemButton>
          </List>
        </Box>
      </Stack>
    </Drawer>
  );
};
