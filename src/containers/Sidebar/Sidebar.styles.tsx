import { Box, List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterList = styled(List)(({ theme }) => ({
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    bottom: 0,
}));

export const NavBox = styled(Box)(
    ({
        theme: {
            spacing,
            breakpoints,
            custom: { drawerWidth },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: drawerWidth.mobile,
        maxWidth: '90vw',
        padding: spacing(0, 2),

        [breakpoints.up('sm')]: {
            width: '100%',
        },
    }),
);
