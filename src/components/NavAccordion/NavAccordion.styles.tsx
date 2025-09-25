import { AccordionSummary } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    borderRadius: theme.spacing(3),
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
