import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constants';
import { RootLayout } from '@layouts/RootLayout';
import { ErrorPage } from '@pages/ErrorPage';
import { NotFound } from '@pages/NotFound';
import Overview from '@pages/Overview';

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
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
]);
