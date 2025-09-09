import { Outlet } from 'react-router-dom';

export const RootLayout = function () {
    return (
        <>
            <h1> This should be common in all</h1>
            <Outlet />
        </>
    );
};
