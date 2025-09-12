import { MainLogo } from 'components';
import { Profile } from 'components';
import { SearchBar } from 'components';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import MainProfileURL from '@assets/images/users/main-profile-picture.jpg';
import { ROUTES } from '@constant';

import { NotificationsButton, StyledNotificationsIcon } from './Header.styles';

export const Header = () => (
    <AppBar position="sticky" color="secondary" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Box only for Tablet + desktop */}
            <Box sx={{ gap: 4, display: { xs: 'none', sm: 'flex' } }}>
                <MainLogo />
                <SearchBar />
            </Box>

            {/* Box only for mobile */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                <IconButton aria-label="Toggle navigation">
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Box for all screens */}
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <NotificationsButton
                    component={Link}
                    to={ROUTES.NOTIFICATIONS}
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
    </AppBar>
);
