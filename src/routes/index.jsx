import { MainLayout } from '../components/MainLayout.jsx';
import { NotFound } from '../utils/NotFound.jsx';
import { Settings } from '../components/Settings/Settings.jsx';
import { Organisations } from '../components/Organisations/index.jsx';
import DocumentForm from '../components/Client page/DocumentForm.jsx';
import OrganizationForm from '../components/Generation/OrganizationForm.jsx';
import Auth from '../components/Auth/Auth.jsx';

export const router = [
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'auth',
    element: <Auth />,
  },
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: 'documents',
    element: <DocumentForm />,
  },
  {
    path: 'generation',
    element: <OrganizationForm />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/settings/organisations',
    element: <Organisations />,
  },
];
