import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, styled } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const topProducts = [
    { label: 'Restaurant Booking App' },
    { label: 'UI Kit' },
    { label: 'Design System Pro' },
    { label: 'Dashboard' },
    { label: 'Glassmorphism UI' },
    { label: 'Multipurpose Template' },
];

const MyAutocomplete = styled(Autocomplete)({
    width: 300,
    borderRadius: '24px',
});

export default function SearchBar() {
    return (
        <MyAutocomplete
            options={topProducts}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="large" />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
            freeSolo
        />
    );
}
