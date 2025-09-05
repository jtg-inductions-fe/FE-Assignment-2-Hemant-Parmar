import { List, styled } from '@mui/material';

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
