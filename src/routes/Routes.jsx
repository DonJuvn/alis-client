import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout.jsx';
import { Root } from './Root.jsx';
import { NotFound } from '../utils/NotFound.jsx';
import { ErrorPage } from '../utils/ErrorPage.jsx';
import { Editor } from '../components/Editor/Editor.jsx';
import { Settings } from '../components/Settings/Settings.jsx';
import { Organisations } from '../components/Organisations';
import DocumentForm from '../components/Client page/DocumentForm.jsx';
import OrganizationForm from '../components/Generation/OrganizationForm.jsx';
import Auth from '../components/Auth/Auth2.jsx';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/editor',
            index: true,
            element: <Editor />,
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
            children: [
              {
                index: true,
                element: <Settings />,
              },
              {
                path: '/settings/organisations',
                element: <Organisations />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
