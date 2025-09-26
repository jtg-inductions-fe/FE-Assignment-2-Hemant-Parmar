import { Autocomplete } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ACProps, Option } from './SearchBar.types';

export const StyledAutocomplete = styled((props: ACProps) => (
    <Autocomplete<Option, false, false, false> {...props} />
))(({ theme }) => ({
    ...theme.typography.body1,
    width: 400,
    alignContent: 'center',

    '& .MuiAutocomplete-inputRoot': {
        boxShadow: theme.shadows[5],
        padding: 0,
    },
}));
