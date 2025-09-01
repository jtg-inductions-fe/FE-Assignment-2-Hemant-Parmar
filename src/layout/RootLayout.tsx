import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export const RootLayout = function () {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
