import { Header } from 'containers';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const RootLayout = () => (
    <Box sx={{ display: 'flex' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
            <Toolbar aria-hidden="true"></Toolbar>
            <Outlet />
        </Box>
    </Box>
);
