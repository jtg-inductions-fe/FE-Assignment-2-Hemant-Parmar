import { IconButton, styled } from '@mui/material';

export const NotificationsButton = styled(IconButton)(({ theme }) => ({
    display: 'block',
    borderRadius: '50%',
    height: '100%',
    aspectRatio: '1/1',
    lineHeight: 'normal',

    [theme.breakpoints.up('sm')]: {
        boxShadow: theme.shadows[10],
    },
})) as typeof IconButton;
