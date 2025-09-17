import { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './SearchBar.styles';
import { Option, SearchBarProps } from './SearchBar.types';

export const SearchBar = ({ options, route, slug }: SearchBarProps) => {
    const navigate = useNavigate();

    const [value, setValue] = useState<Option | null>(null);

    useEffect(() => {
        if (slug) {
            options.forEach((option) => {
                if (option.route === slug.toLowerCase()) {
                    setValue(option);
                    return;
                }
            });
        } else {
            setValue(null);
        }
    }, [slug, options]);

    const handleSelection = (
        _: SyntheticEvent,
        selectedOption: unknown,
    ) => {
        if (selectedOption && options) {
            options.forEach((option) => {
                if (option === selectedOption) {
                    navigate(`${route}/${option.route}`);
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
            onChange={handleSelection}
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
