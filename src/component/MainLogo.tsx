import IconButton from '@mui/material/IconButton';

import MainLogoURL from '@assets/images/MainLogo.svg';

export default function MainLogo() {
    return (
        <IconButton href="/">
            <img src={MainLogoURL} alt="The main logo of the website" />
        </IconButton>
    );
}
