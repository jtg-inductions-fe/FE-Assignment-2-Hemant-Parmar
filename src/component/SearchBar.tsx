// import { useState } from 'react';

import { SyntheticEvent } from 'react';

import { topProducts } from 'data';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, styled } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { COLORS, FONT_SIZES } from '@constant';

const MyAutocomplete = styled(Autocomplete)({
    width: 400,
    fontSize: FONT_SIZES['base'],
    alignContent: 'center',
    '& .MuiOutlinedInput-root': {
        boxShadow: `0 5px 5px ${COLORS.COOL_GRAY[200]}`,
        padding: 0,
    },
});

export default function SearchBar() {
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
        <MyAutocomplete
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
                            style: {
                                borderRadius: 16,
                            },
                        },
                    }}
                    {...params}
                />
            )}
        />
    );
}
