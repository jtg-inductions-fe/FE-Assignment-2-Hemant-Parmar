import { Link, useParams } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import MainProfileURL from '@assets/images/users/main-profile-picture.jpg';
import { MainLogo } from '@components';
import { Profile } from '@components';
import { SearchBar } from '@components';
import { ROUTES } from '@constants';
import { topProducts } from '@data';

import { NotificationsButton } from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = ({ handleDrawerToggle, mobileOpen }: HeaderProps) => {
    const { productId } = useParams<{ productId: string }>();

    return (
        <AppBar
            position="sticky"
            color="secondary"
            elevation={1}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Box only for Tablet + desktop */}
                <Box sx={{ gap: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <MainLogo route={ROUTES.ROOT} />
                    <SearchBar
                        options={topProducts}
                        route={ROUTES.PRODUCTS}
                        slug={productId}
                    />
                </Box>

                {/* Box only for mobile */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton
                        onClick={handleDrawerToggle}
                        aria-label="Toggle navigation"
                        aria-expanded={mobileOpen ? true : false}
                    >
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
                        <NotificationsIcon fontSize="medium" />
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
};
