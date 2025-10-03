import { Link } from 'react-router-dom';

import { Box, IconButton } from '@mui/material';

import MainLogoURL from '@assets/images/MainLogo.svg';

import { MainLogoProps } from './MainLogo.types';

export const MainLogo = ({ route, label }: MainLogoProps) => (
    <IconButton component={Link} to={route} aria-label={label}>
        <Box component={'img'} src={MainLogoURL} alt="Themesberg logo" />
    </IconButton>
);
