import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Home } from './pages/home.tsx';
import { UserDetail } from './pages/userDetail.tsx';
import { Users } from './pages/users.tsx';

export const routerConfigs = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'users/:id',
        element: <UserDetail />
      }
    ]
  }
];

const router = createBrowserRouter(routerConfigs);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
