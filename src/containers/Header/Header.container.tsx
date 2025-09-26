import { Link, useSearchParams } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import MainProfileURL from '@assets/images/users/main-profile-picture.jpg';
import { MainLogo, Profile, SearchBar } from '@components';
import { PARAMS, ROUTES } from '@constants';
import { topProducts } from '@data';

import { RoundedButton } from './Header.styles';

export const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const productId = searchParams.get(PARAMS.PRODUCT_ID);

    const selectionHandler = (newVal: string) => {
        setSearchParams([[PARAMS.PRODUCT_ID, newVal]]);
    };

    return (
        <AppBar position="sticky" color="secondary" elevation={1}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Box only for Tablet + desktop */}
                <Box sx={{ gap: 4, display: { xs: 'none', sm: 'flex' } }}>
                    <MainLogo route={ROUTES.ROOT} />
                    <SearchBar
                        options={topProducts}
                        route={ROUTES.PRODUCTS}
                        val={productId ? productId : undefined}
                        selectionHandler={selectionHandler}
                    />
                </Box>

                {/* Box only for mobile */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton aria-label="Toggle navigation">
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Box>

                {/* Box for all screens */}
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <RoundedButton
                        component={Link}
                        to={ROUTES.NOTIFICATIONS}
                        aria-label="Notifications"
                    >
                        <NotificationsIcon fontSize="medium" />
                    </RoundedButton>
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
