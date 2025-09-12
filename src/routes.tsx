import { RootLayout } from 'layouts/RootLayout';
import { ErrorPage } from 'pages/ErrorPage';
import { NotFound } from 'pages/NotFound';
import Overview from 'pages/Overview';
import { createBrowserRouter } from 'react-router-dom';

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
]);
