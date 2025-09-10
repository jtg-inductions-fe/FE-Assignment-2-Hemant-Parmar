import { MainLogo } from 'component';
import { Profile } from 'component';
import { SearchBar } from 'component';
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

export const Header = () => (
    <AppBar position="sticky" color="secondary" elevation={1}>
        <Container maxWidth={false}>
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                {/* Box only for Table + desktop */}
                <Box sx={{ gap: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <MainLogo />
                    <SearchBar />
                </Box>

                {/* Box only for mobile */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton aria-label="Toggle navigation">
                        <MenuIcon
                            fontSize="large"
                            sx={{ color: theme.palette.text.primary }}
                        />
                    </IconButton>
                </Box>

                {/* Box for all screens */}
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
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
);
