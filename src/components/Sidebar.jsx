import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  Home,
  ArrowRight,
  ErrorOutlineOutlined,
  DescriptionOutlined,
  SwapHorizOutlined,
  ContentPasteGoOutlined,
  PeopleOutlineOutlined,
  PermIdentity,
  FolderSharedOutlined,
  Settings,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const sidebarWidth = 320;

const menuItems = [
  {
    id: 'cash-register',
    title: 'Главное',
    icon: <Home />,
    link: '/home',
  },
  {
    id: 'simple-income',
    title: 'Руководителю',
    icon: <PermIdentity />,
    link: '/operator',
  },
  {
    id: 'payments',
    title: 'Корпоративные документы',
    icon: <FolderSharedOutlined />,
    link: '/corporate-documents',
  },
  {
    id: 'products',
    title: 'Покупатели/Поставщики',
    icon: <PeopleOutlineOutlined />,
    link: '/vendors',
  },
  {
    id: 'trading',
    title: 'Приказы',
    icon: <ContentPasteGoOutlined />,
    link: '/orders',
  },
  {
    id: 'products-1',
    title: 'Трудовые отнощения',
    icon: <SwapHorizOutlined />,
    link: '/employees',
  },
  {
    id: 'products-2',
    title: 'Справочники',
    icon: <DescriptionOutlined />,
    link: '/directories',
  },
  {
    id: 'products-3',
    title: 'Отчеты',
    icon: <ErrorOutlineOutlined />,
    link: '/reports',
  },
  {
    id: 'settings',
    title: 'Настройки',
    icon: <Settings />,
    link: '/settings/',
    bottom: true,
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();
  const selectedTheme = useSelector(state => state.theme.selectedTheme);
  const { isExtended, setIsExtended } = useState(true);
  const isDarkMode = selectedTheme === 'dark';

  return (
    <Paper>
      <Stack
        sx={{
          minWidth: isExtended ? sidebarWidth : 75,
          transition: '0.3s',
          borderRadius: '10px',
          padding: '20px 20px',
        }}
      >
        <img
          onClick={() => setIsExtended(prev => !prev)}
          style={{
            width: '90px',
            maxHeight: '40px',
            margin: '20px 0 5px',
          }}
          src={
            !isDarkMode
              ? isExtended
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
            {menuItems.map(
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
                    {isExtended && <ListItemText primary={item.title} />}
                    <ArrowRight
                      style={{
                        display: isExtended ? 'flex' : 'none',
                      }}
                    />
                  </ListItemButton>
                ),
            )}
          </List>
          <List>
            {menuItems.map(
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
                    {isExtended && <ListItemText primary={item.title} />}
                  </ListItemButton>
                ),
            )}
          </List>
        </Stack>
      </Stack>
    </Paper>
  );
};
