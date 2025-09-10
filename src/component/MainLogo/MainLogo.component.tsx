import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';

import MainLogoURL from '@assets/images/MainLogo.svg';

export const MainLogo = () => (
    <IconButton component={Link} to="/">
        <img src={MainLogoURL} alt="The main logo of the website" />
    </IconButton>
);
