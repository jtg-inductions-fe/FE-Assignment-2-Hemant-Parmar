import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';

import MainLogoURL from '@assets/images/MainLogo.svg';

export default function MainLogo() {
    const navigate = useNavigate();

    return (
        <IconButton onClick={() => void navigate('/')}>
            <img src={MainLogoURL} alt="The main logo of the website" />
        </IconButton>
    );
}
