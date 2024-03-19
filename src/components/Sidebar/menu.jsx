import {
  Home,
  ErrorOutlineOutlined,
  DescriptionOutlined,
  SwapHorizOutlined,
  ContentPasteGoOutlined,
  PeopleOutlineOutlined,
  PermIdentity,
  FolderSharedOutlined,
} from '@mui/icons-material';

export const menu = [
  {
    id: 'cash-register',
    title: 'Главное',
    icon: <Home />,
    link: '/main',
  },
  {
    id: 'simple-income',
    title: 'Руководителю',
    icon: <PermIdentity />,
    link: '/simple-income',
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
    id: 'products',
    title: 'Трудовые отнощения',
    icon: <SwapHorizOutlined />,
    link: '/store/product-categories',
  },
  {
    id: 'products',
    title: 'Справочники',
    icon: <DescriptionOutlined />,
    link: '/store/product-categories',
  },
  {
    id: 'products',
    title: 'Отчеты',
    icon: <ErrorOutlineOutlined />,
    link: '/store/product-categories',
  },
];
