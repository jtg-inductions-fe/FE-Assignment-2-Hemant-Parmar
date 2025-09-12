import { SyntheticEvent } from 'react';

import { topProducts } from 'data';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './SearchBar.styles';

export const SearchBar = () => {
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
                                    <SearchIcon
                                        fontSize="medium"
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.text.secondary,
                                        }}
                                    />
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
};
