import { Link, useLocation } from 'react-router-dom';
import { Paper, Stack } from '@mui/material';
import {
  Home,
  ErrorOutlineOutlined,
  DescriptionOutlined,
  SwapHorizOutlined,
  ContentPasteGoOutlined,
  PeopleOutlineOutlined,
  PermIdentity,
  FolderSharedOutlined,
  Settings,
  EditNoteOutlined,
} from '@mui/icons-material';
import LinkItem from './LinkItem';

const menuItems = [
  {
    id: 'cash-register',
    title: 'Главное',
    icon: <EditNoteOutlined />,
    link: '/home',
  },
  {
    id: 'create',
    title: 'Создать документ',
    icon: <Home />,
    link: '/create-doc',
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
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Paper>
      <Stack
        sx={{
          width: 260,
          transition: '0.3s',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <Link to="/">
          <img className="logo" src="../../public/Логотип.png" alt="" />
        </Link>
        {menuItems.map(item => (
          <LinkItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            to={item.link}
            isSelected={pathname === item.link}
          />
        ))}
      </Stack>
    </Paper>
  );
};
