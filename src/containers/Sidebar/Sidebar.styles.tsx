import { Box, List, styled } from '@mui/material';

export const FooterList = styled(List)(({ theme }) => ({
    position: 'sticky',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(4),
    background: theme.palette.background.paper,
}));

export const NavBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: theme.custom.drawerWidth.mobile,

    [theme.breakpoints.up('sm')]: {
        width: theme.custom.drawerWidth.desktop,
    },
    maxWidth: '90vw',
}));
