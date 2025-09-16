import { AccordionSummary, styled } from '@mui/material';

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    borderRadius: 3,
    boxShadow: 'none',
    border: 'none',
    paddingLeft: 0,
    paddingRight: theme.spacing(3),

    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },

    '&.Mui-expanded': {
        backgroundColor: theme.palette.action.active,
    },

    '& .MuiAccordionSummary-content': {
        margin: 0,
    },
}));
