import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout.jsx';
import { Root } from './Root.jsx';
import { NotFound } from '../utils/NotFound.jsx';
import { ErrorPage } from '../utils/ErrorPage.jsx';
import { Editor } from '../components/Editor/Editor.jsx';

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
      // {
      //   path: 'auth',
      //   element: <AuthLayout />, // авторизация
      // },
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/editor',
            index: true,
            element: <Editor />,
          },
        ],
      },
    ],
  },
]);
