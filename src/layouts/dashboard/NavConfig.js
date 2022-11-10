// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Subjects',
    path: '/dashboard/subjects',
    icon: getIcon('mdi:school'),
  },
  {
    title: 'Quizzes',
    path: '/dashboard/sections',
    icon: getIcon('mdi:book-open-blank-variant'),
  },
  {
    title: 'Performance',
    path: '/dashboard/performance',
    icon: getIcon('eva:people-fill'),
  },
 
];

export default navConfig;
