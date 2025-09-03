import MainLogo from 'component/MainLogo';
import MainProfile from 'component/MainProfile';
import SearchBar from 'component/SearchBar';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { COLORS } from '@constant';

export function Header() {
    return (
        <AppBar position="sticky" color="secondary" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    {/* Box only for Table + desktop */}
                    <Box sx={{ gap: 4, display: { xs: 'none', sm: 'flex' } }}>
                        <MainLogo />
                        <SearchBar />
                    </Box>

                    {/* Box only for mobile */}
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton>
                            <MenuOpenIcon
                                fontSize="large"
                                sx={{ color: COLORS.COOL_GRAY[900] }}
                            />
                        </IconButton>
                    </Box>

                    {/* Box for all screens */}
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            href="/notifications"
                            aria-label="Notifications"
                        >
                            <NotificationsIcon
                                fontSize="large"
                                sx={{ color: COLORS.COOL_GRAY[900] }}
                            />
                        </IconButton>
                        <MainProfile />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
