import { Box, List, styled } from '@mui/material';

import { DRAWER_WIDTH } from '@constant';
import { theme } from '@theme';

export const FooterList = styled(List)({
    position: 'sticky',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(4),
    background: theme.palette.background.paper,
});

export const NavBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: DRAWER_WIDTH.XS,
    [theme.breakpoints.up('sm')]: {
        width: DRAWER_WIDTH.SM,
    },
    maxWidth: '90vw',
});
