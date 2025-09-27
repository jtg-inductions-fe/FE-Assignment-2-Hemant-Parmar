import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TooltipPaper = styled(Paper)(
    ({
        theme: {
            spacing,
            shape: { borderRadius },
            palette: {
                background: { paper },
            },
        },
    }) => ({
        padding: spacing(2),
        borderRadius: 2 * borderRadius,
        backgroundColor: paper,
        position: 'relative',
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 6px rgba(0,0,0,0.2))', // single shadow for whole shape

        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: spacing(-2),
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: spacing(4),
            height: spacing(4),
            backgroundColor: paper,
        },
    }),
);
