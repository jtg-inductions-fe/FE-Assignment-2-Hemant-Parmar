import { Link } from 'react-router-dom';

import { Box, IconButton } from '@mui/material';

import MainLogoURL from '@assets/images/MainLogo.svg';
import { ROUTES } from '@constant';

export const MainLogo = () => (
    <IconButton component={Link} to={ROUTES.ROOT}>
        <Box
            component={'img'}
            src={MainLogoURL}
            alt="The main logo of the website"
        />
    </IconButton>
);
