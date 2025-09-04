import { SyntheticEvent } from 'react';

import { topProducts } from 'data';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { StyledAutocomplete } from './SearchBar.style';

export function SearchBar() {
    const navigate = useNavigate();

    const handleProductSelect = (
        _: SyntheticEvent,
        selectedProduct: string,
    ) => {
        if (selectedProduct && topProducts.includes(selectedProduct)) {
            void navigate(`/products/${selectedProduct}`);
        }
    };

    return (
        <StyledAutocomplete
            freeSolo={false}
            options={topProducts}
            forcePopupIcon={false}
            selectOnFocus
            handleHomeEndKeys
            onInputChange={handleProductSelect}
            renderInput={(params) => (
                <TextField
                    placeholder="Search"
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon fontSize="medium" />
                                </InputAdornment>
                            ),
                        },
                    }}
                    {...params}
                />
            )}
            slotProps={{
                listbox: {
                    sx: {
                        '& .MuiAutocomplete-option': {
                            display: 'block',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        },
                    },
                },
            }}
        />
    );
}
