import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RoundedButton = styled(IconButton)(
    ({ theme: { spacing, shadows } }) => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: spacing(10),
        height: spacing(10),
        padding: spacing(0.5),
        borderRadius: '50%',
        lineHeight: 1,

        '&:hover': {
            boxShadow: shadows[10],
        },
    }),
) as typeof IconButton;
