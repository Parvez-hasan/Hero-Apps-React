import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppCart from '../Pages/AppCart/AppCart';
import AllApp from '../Pages/allApp/AllApp';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path:'/AppsCart',
            Component: AppCart
        },
        {
            path: '/allApp',
            Component: AllApp
        }
    ]
  },
]);