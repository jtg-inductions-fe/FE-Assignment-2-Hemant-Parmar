import MyDrawer from 'component/MyDrawer';

import { Box, Drawer, useMediaQuery } from '@mui/material';

import { theme } from '@theme';

const drawerWidth = 250;

interface SidebarProps {
    mobileOpen: boolean;
    handleDrawerClose: () => void;
}

export default function Sidebar({
    mobileOpen,
    handleDrawerClose,
}: SidebarProps) {
    const match = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="Navigation sidebar"
        >
            <Drawer
                variant={match ? 'permanent' : 'temporary'}
                open={match ? true : mobileOpen}
                onClose={handleDrawerClose}
            >
                <MyDrawer />
            </Drawer>
        </Box>
    );
}
