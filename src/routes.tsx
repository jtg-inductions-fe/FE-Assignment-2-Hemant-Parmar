import { App } from 'App';
import { ErrorPage } from 'page/ErrorPage';
import { NotFound } from 'page/NotFound';
import Overview from 'page/Overview';
import { createBrowserRouter } from 'react-router-dom';

// TODO: Is there improved way of passing elements?
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <App />
                <Overview />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '*',
        element: (
            <>
                <App />
                <NotFound />
            </>
        ),
        errorElement: <ErrorPage />,
    },
]);
