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
  NoteAdd,
} from '@mui/icons-material';

export default [
  {
    id: 'cash-register',
    title: 'Главное',
    icon: <Home />,
    link: '/',
  },
  {
    id: 'simple-income',
    title: 'Руководителю',
    icon: <PermIdentity />,
    link: '/documents',
  },
  {
    id: 'payments',
    title: 'Корпоративные документы',
    icon: <FolderSharedOutlined />,
    link: '/payments',
  },
  {
    id: 'products',
    title: 'Покупатели/Поставщики',
    icon: <PeopleOutlineOutlined />,
    link: '/store/product-categories',
  },
  {
    id: 'trading',
    title: 'Приказы',
    icon: <ContentPasteGoOutlined />,
  },
  {
    id: 'products-1',
    title: 'Трудовые отнощения',
    icon: <SwapHorizOutlined />,
    link: '/store/product-categories',
  },
  {
    id: 'products-2',
    title: 'Справочники',
    icon: <DescriptionOutlined />,
    link: '/store/product-categories',
  },
  {
    id: 'products-3',
    title: 'Отчеты',
    icon: <ErrorOutlineOutlined />,
    link: '/store/product-categories',
  },
  {
    id: 'settings',
    title: 'Настройки',
    icon: <Settings />,
    link: '/settings/',
    bottom: true,
  },
  {
    id: 'generation',
    title: 'Генерация',
    icon: <NoteAdd />,
    link: '/generation',
    bottom: true,
  },
];