import { RootLayout } from 'layouts/RootLayout';
import { ErrorPage } from 'pages/ErrorPage';
import { NotFound } from 'pages/NotFound';
import Overview from 'pages/Overview';
import { createBrowserRouter } from 'react-router-dom';

import { ROUTES, SLUGS } from '@constants';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Overview />,
                errorElement: <ErrorPage />,
            },
            {
                path: '*',
                element: <NotFound />,
                errorElement: <ErrorPage />,
            },
        ],
    },
    {
        path: ROUTES.PRODUCTS,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <NotFound />, errorElement: <ErrorPage /> },
            {
                path: SLUGS.PRODUCT_ID,
                element: <NotFound />, // Ideally we want a Product page here
                errorElement: <ErrorPage />,
            },
            { path: '*', element: <NotFound />, errorElement: <ErrorPage /> },
        ],
    },
]);
