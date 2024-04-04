import {
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from './useNavigation';
import { useSidebar } from './useSidebar';
import { ArrowRight } from '@mui/icons-material';
import { useTheme } from '@utils/Theme';

const sidebarWidth = 320;

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { menu } = useNavigation();
  const { isOpen } = useSidebar();
  const { darkMode } = useTheme();

  return (
    <Paper>
      <Stack
        sx={{
          minWidth: isOpen ? sidebarWidth : 75,
          transition: '0.3s',
          borderRadius: '10px',
          padding: '20px 20px',
        }}
      >
        <img
          style={{
            width: '90px',
            maxHeight: '40px',
            margin: '20px 0 5px',
          }}
          src={
            !darkMode
              ? isOpen
                ? '/imgLogo.png'
                : '/imgLogoWithoutName.png'
              : '/imgLogoWhite.png'
          }
          alt="ALIS Logo"
        />
        <input
          type="text"
          placeholder="Поиск"
          style={{
            outline: 'none',
            color: 'black',
            background: 'rgba(0,0,150,0.1)',
            margin: '15px 0',
            padding: '5px 10px',
            borderRadius: '10px',
          }}
        />

        <Stack
          sx={{
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <List>
            {menu.map(
              item =>
                !item.bottom && (
                  <ListItemButton
                    key={item.id}
                    component={Link}
                    to={item.link ?? ''}
                    selected={pathname === item.link}
                    sx={{
                      padding: '5px 5px',
                      margin: '5px 0',
                      borderRadius: 3,
                      '&.Mui-selected ': {
                        color: 'white',
                        backgroundColor: '#323DA7',
                      },
                      '&.Mui-selected .css-i4bv87-MuiSvgIcon-root': {
                        fill: 'white',
                      },
                      '& .MuiListItemText-primary': {
                        fontSize: '0.7rem',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: '30px',
                        '&.MuiListItemIcon-root .MuiSvgIcon-root': {
                          width: '20px',
                        },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {isOpen && <ListItemText primary={item.title} />}
                    <ArrowRight
                      style={{
                        display: isOpen ? 'flex' : 'none',
                      }}
                    />
                  </ListItemButton>
                ),
            )}
          </List>
          <List>
            {menu.map(
              item =>
                item.bottom && (
                  <ListItemButton
                    key={item.id}
                    component={Link}
                    to={item.link ?? ''}
                    selected={pathname === item.link}
                    sx={{
                      padding: '5px 5px',
                      margin: '10px 0',
                      borderRadius: 3,
                      '&.Mui-selected ': {
                        color: 'white',
                        backgroundColor: '#323DA7',
                      },
                      '&.Mui-selected .css-i4bv87-MuiSvgIcon-root': {
                        fill: 'white',
                      },
                      '& .MuiListItemText-primary': {
                        fontSize: '0.8rem',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      {item.icon}
                    </ListItemIcon>
                    {isOpen && <ListItemText primary={item.title} />}
                  </ListItemButton>
                ),
            )}
          </List>
        </Stack>
      </Stack>
    </Paper>
  );
};
