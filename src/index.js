// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavigationBar from './atoms/NavigationBar';
import PointOfSalePage from './pages/PointOfSalePage';
import ReservationPage from './pages/ReservationPage';
import './index.css';

const routes = [
  {
    path: '/',
    element: (
      <div>
        <NavigationBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <PointOfSalePage />,
        // Add loaders or other properties as needed
      },
      {
        path: '/reservation',
        element: <ReservationPage />,
        // Add loaders or other properties as needed
      },
    ],
  },
];

// Create the router
const router = createBrowserRouter(routes);

// Render the app with the router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {router}
    </RouterProvider>
  </React.StrictMode>
);
