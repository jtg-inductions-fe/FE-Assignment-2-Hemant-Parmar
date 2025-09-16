import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import { Header } from '@containers';
import { Sidebar } from '@containers';

import { RootLayoutProps } from './RootLayout.types';

export const RootLayout = ({ showSidebar }: RootLayoutProps) => {
        const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Header handleDrawerToggle={handleDrawerToggle}/>
            {showSidebar && <Sidebar mobileOpen={mobileOpen} handleDrawerClose={handleDrawerClose} />}
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>
        </Box>
    );
};
