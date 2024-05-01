import Settings from '../pages/Settings';
import DocumentForm from '../components/DocumentForm.jsx';
import OrganizationForm from '../components/OrganizationForm.jsx';
import TemplateGeneration from '../pages/TemplateGeneration.jsx';

export default [
  {
    path: '/home',
    element: <h1>home</h1>,
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
    path: '/template-generation',
    element: <TemplateGeneration />,
  },
];
