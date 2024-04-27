import Settings from '../components/Settings';
import DocumentForm from '../components/DocumentForm.jsx';
import OrganizationForm from '../components/OrganizationForm.jsx';

export default [
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
    element: <h1>home</h1>,
    path: '/home',
  },
  {
    element: <h1>docuements</h1>,
    path: '/documents',
  },
];
