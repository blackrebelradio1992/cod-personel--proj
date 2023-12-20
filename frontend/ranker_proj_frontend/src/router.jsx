import { createBrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';
import UserForm from './components/UserForm.jsx';
import Error404Page from './components/Error404Page.jsx';
import HomePage from './components/HomePage.jsx';
import UserPage from './components/UserPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/signup',
        element: <UserForm />,
      },
      {
        path: '/profile',
        element: <UserPage />,
      },
    ],
    errorElement: <Error404Page />,
  },
]);

export default router;
