import { AccordionSummary, styled } from '@mui/material';

import { COLORS } from '@constant';
import { theme } from '@theme';

export const StyledAccordionSummary = styled(AccordionSummary)({
    borderRadius: 3,
    boxShadow: 'none',
    border: 'none',
    paddingLeft: 0,
    paddingRight: theme.spacing(3),

    '&:hover': {
        backgroundColor: COLORS.GREEN[100],
    },

    '&.Mui-expanded': {
        backgroundColor: COLORS.GREEN[100],
    },

    '& .MuiAccordionSummary-content': {
        margin: 0,
    },
});
