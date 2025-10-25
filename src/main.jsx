import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import Register from './Components/Register.jsx';
import ToyDetails from './Components/ToyDetails.jsx';
import NotFound from './Components/NotFound.jsx';
import ForgotPassword from './Components/ForgotPassword';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/login', Component: Login },
      { path: '/profile', Component: Profile },
      { path: '/register', Component: Register },
      { path: '/forgot-password', Component: ForgotPassword },
      {
        path: '/toy/:toyId',
        Component: ToyDetails,
      },
      { path: '/notfound', Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
