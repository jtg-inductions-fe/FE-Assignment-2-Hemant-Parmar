import { Link } from 'react-router-dom';

import { Box, IconButton } from '@mui/material';

import MainLogoURL from '@assets/images/MainLogo.svg';

export const MainLogo = () => (
    <IconButton component={Link} to="/">
        <Box
            component={'img'}
            src={MainLogoURL}
            alt="The main logo of the website"
        />
    </IconButton>
);
