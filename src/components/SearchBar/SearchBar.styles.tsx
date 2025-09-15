import { Autocomplete, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    ...theme.typography.body1,
    width: 400,
    alignContent: 'center',

    '& .MuiAutocomplete-inputRoot': {
        boxShadow: theme.shadows[5],
        padding: 0,
    },
}));
