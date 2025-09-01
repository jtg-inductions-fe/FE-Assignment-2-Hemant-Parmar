import SearchBar from 'component/SearchBar';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import MainProfile from '@assets/images/main-profile-picture.jpg';
import MainLogo from '@assets/images/MainLogo.svg';
import { COLORS } from '@constant';

export function Header() {
    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ justifyContent: 'space-between' }}
                >
                    {/* Box only for Table + desktop */}
                    <Box sx={{ gap: 4, display: { xs: 'none', sm: 'flex' } }}>
                        <IconButton>
                            <img
                                src={MainLogo}
                                alt="The main logo of the website"
                            />
                        </IconButton>
                        <SearchBar></SearchBar>
                    </Box>

                    {/* Box only for mobile */}
                    <Box
                        sx={{
                            display: {
                                xs: 'flex',
                                sm: 'none',
                            },
                        }}
                    >
                        <IconButton>
                            <MenuOpenIcon
                                fontSize="large"
                                sx={{ color: COLORS.COOL_GRAY[900] }}
                            />
                        </IconButton>
                    </Box>

                    {/* Box for all screens */}
                    <Box sx={{ display: 'flex' }}>
                        <IconButton>
                            <NotificationsIcon
                                fontSize="large"
                                sx={{ color: COLORS.COOL_GRAY[900] }}
                            />
                        </IconButton>
                        <IconButton>
                            <Avatar
                                src={MainProfile}
                                alt="Profile of current user"
                            />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
