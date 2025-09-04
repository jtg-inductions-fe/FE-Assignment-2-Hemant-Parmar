import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';

import MainLogoURL from '@assets/images/MainLogo.svg';

export function MainLogo() {
    return (
        <IconButton component={Link} to="/">
            <img src={MainLogoURL} alt="The main logo of the website" />
        </IconButton>
    );
}
