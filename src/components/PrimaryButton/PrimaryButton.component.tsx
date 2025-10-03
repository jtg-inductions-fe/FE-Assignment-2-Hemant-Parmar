import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { PrimaryButtonProps } from './PrimaryButton.types';

export const PrimaryButton = (props: PrimaryButtonProps) => (
    <Button
        component={'route' in props ? Link : 'button'}
        to={'route' in props ? props.route : undefined}
        onClick={'onClick' in props ? props.onClick : undefined}
        variant="contained"
        sx={{ textTransform: 'none', borderRadius: 3 }}
    >
        <Typography color="secondary">{props.content}</Typography>
    </Button>
);
