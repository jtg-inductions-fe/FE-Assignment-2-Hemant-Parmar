import { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './SearchBar.styles';
import { Option } from './SearchBar.types';

export const SearchBar = ({ options }: { options: Option[] }) => {
    const navigate = useNavigate();

    const { productId } = useParams<{ productId: string }>();

    const [value, setValue] = useState<Option | null>(null);

    useEffect(() => {
        if (productId) {
            options.forEach((option) => {
                if (option.route === productId.toLowerCase()) {
                    setValue(option);
                    return;
                }
            });
        } else {
            setValue(null);
        }
    }, [productId, options]);

    const handleProductSelect = (
        _: SyntheticEvent,
        selectedOption: unknown,
    ) => {
        if (selectedOption && options) {
            options.forEach((option) => {
                if (option === selectedOption) {
                    void navigate(`/products/${option.route}`);
                    setValue(option);
                    return;
                }
            });
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
            onChange={handleProductSelect}
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
