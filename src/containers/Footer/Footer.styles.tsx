import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterBox = styled(Box)(
    ({ theme: { spacing, breakpoints, shape } }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: spacing(4),
        padding: spacing(6),
        borderRadius: shape.borderRadius * 4,

        [breakpoints.up('sm')]: {
            gap: 0,
            alignItems: 'center',
            flexDirection: 'row',
        },
    }),
) as typeof Box;
