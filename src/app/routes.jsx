import { Login } from '../components/login';
import { Signup } from '../components/signup';
import { Dashboard } from '../components/dashboard';
import { CreateTask } from '../components/createTask';

export const routes = [
  {
    path: '/login',
    component: <Login />,
    name: 'Login',
  },
  {
    path: '/signup',
    component: <Signup />,
    name: 'Sign up',
  },
  {
    path: '/dashboard',
    component: <Dashboard />,
    name: 'Dashboard',
  },
  {
    path: '/create-task',
    component: <CreateTask />,
    name: 'Create Task',
  },
  {
    path: '/',
    component: <></>,
    name: 'Home',
  },
];
