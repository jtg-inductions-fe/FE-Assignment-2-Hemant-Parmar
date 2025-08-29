import { App } from 'layout/RootLayout';
import { ErrorPage } from 'page/ErrorPage';
import { NotFound } from 'page/NotFound';
import Overview from 'page/Overview';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Overview />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);
