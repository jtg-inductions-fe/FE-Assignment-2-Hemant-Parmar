import { List, styled } from '@mui/material';

import { theme } from '@theme';

export const FooterList = styled(List)({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    background: theme.palette.background.paper,
});
