import { Header } from 'containers';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => (
    <>
        <Header />
        <Outlet />
    </>
);
