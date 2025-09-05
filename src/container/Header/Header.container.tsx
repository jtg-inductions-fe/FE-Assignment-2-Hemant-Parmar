import { useState } from 'react';

import { MainLogo } from 'component';
import { Profile } from 'component';
import { SearchBar } from 'component';
import { Sidebar } from 'container';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import MainProfileURL from '@assets/images/users/main-profile-picture.jpg';
import { theme } from '@theme';

import { NotificationsButton, StyledNotificationsIcon } from './Header.style';

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar
                mobileOpen={mobileOpen}
                handleDrawerClose={handleDrawerClose}
            />

            <AppBar
                position="fixed"
                color="secondary"
                elevation={1}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Container maxWidth={false}>
                    <Toolbar
                        disableGutters
                        sx={{ justifyContent: 'space-between' }}
                    >
                        {/* Only for mobile */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'flex', sm: 'none' } }}
                         aria-label="Toggle navigation">
                            <MenuIcon
                                fontSize="large"
                                sx={{ color: theme.palette.text.primary }}
                            />
                        </IconButton>

                        {/* Box only for Table + desktop */}
                        <Box
                            sx={{ gap: 4, display: { xs: 'none', sm: 'flex' } }}
                        >
                            <MainLogo />
                            <SearchBar />
                        </Box>

                        {/* Box for all screens */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                alignItems: 'center',
                            }}
                        >
                            <NotificationsButton
                                component={Link}
                                to="/notifications"
                                aria-label="Notifications"
                            >
                                <StyledNotificationsIcon fontSize="medium" />
                            </NotificationsButton>
                            <Profile
                                name="Hemant Parmar"
                                email="hemantparmar@hotmail.com"
                                imageURL={MainProfileURL}
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
