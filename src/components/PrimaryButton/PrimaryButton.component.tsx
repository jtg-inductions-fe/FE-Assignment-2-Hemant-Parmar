import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { PrimaryButtonProps } from './PrimaryButton.types';

export const PrimaryButton = ({
    route,
    content,
    onClick,
}: PrimaryButtonProps) => (
    <Button
        component={route ? Link : 'button'}
        to={route}
        onClick={onClick}
        variant="contained"
        sx={{ textTransform: 'none', borderRadius: 3 }}
    >
        <Typography color="secondary">{content}</Typography>
    </Button>
);
