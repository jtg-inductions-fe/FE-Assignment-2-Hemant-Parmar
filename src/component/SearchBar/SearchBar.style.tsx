import { Autocomplete, styled } from '@mui/material';

import { theme } from '@theme';

export const StyledAutocomplete = styled(Autocomplete)({
    ...theme.typography.body1,
    width: 400,
    alignContent: 'center',
    '& .MuiAutocomplete-inputRoot': {
        boxShadow: theme.shadows[5],
        padding: 0,
        borderRadius: 16,
    },
});
