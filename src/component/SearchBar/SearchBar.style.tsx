import { Autocomplete, styled } from '@mui/material';

import { FONT_SIZES } from '@constant';
import { theme } from '@theme';

export const StyledAutocomplete = styled(Autocomplete)({
    width: 400,
    fontSize: FONT_SIZES['base'],
    alignContent: 'center',
    '& .MuiAutocomplete-inputRoot': {
        boxShadow: theme.shadows[5],
        padding: 0,
        borderRadius: 16,
    },
});
