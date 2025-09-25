import { AccordionSummary } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAccordionSummary = styled(AccordionSummary)(
    ({
        theme: {
            spacing,
            palette: { action },
        },
    }) => ({
        borderRadius: spacing(3),
        boxShadow: 'none',
        border: 'none',
        paddingLeft: 0,
        paddingRight: spacing(3),

        '&:hover': {
            backgroundColor: action.hover,
        },

        '&.Mui-expanded': {
            backgroundColor: action.active,
        },

        '& .MuiAccordionSummary-content': {
            margin: 0,
        },
    }),
);
