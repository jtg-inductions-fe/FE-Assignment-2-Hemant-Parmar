import { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './SearchBar.styles';

export const SearchBar = ({ options }: { options: string[] }) => {
    const navigate = useNavigate();

    const { productId } = useParams();

    const [value, setValue] = useState<string | null>(null);

    useEffect(() => {
        if (productId && options.includes(productId)) {
            setValue(productId);
        } else {
            setValue(null);
        }
    }, [productId, options]);

    const handleProductSelect = (_: SyntheticEvent, selectedOption: string) => {
        if (selectedOption && options.includes(selectedOption)) {
            void navigate(`/products/${selectedOption}`);
        }
    };

    return (
        <StyledAutocomplete
            freeSolo={false}
            options={options}
            value={value}
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
