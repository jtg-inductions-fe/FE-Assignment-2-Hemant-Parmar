import { Header } from 'container';
import { Outlet } from 'react-router-dom';

export const RootLayout = function () {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
