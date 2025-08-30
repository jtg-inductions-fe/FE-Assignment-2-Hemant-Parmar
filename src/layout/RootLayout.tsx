import { Outlet } from 'react-router-dom';

export function RootLayout() {
    return (
        <>
            <h1> This should be common in all</h1>
            <Outlet />
        </>
    );
}
