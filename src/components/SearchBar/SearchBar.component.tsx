import { SyntheticEvent } from 'react';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './SearchBar.styles';
import { Option, SearchBarProps } from './SearchBar.types';

export const SearchBar = ({ options, route, param }: SearchBarProps) => {
    const navigate = useNavigate();

    const [value, setValue] = useState<Option | null>(null);

    useEffect(() => {
        if (param) {
            options.forEach((option) => {
                if (option.route === param.toLowerCase()) {
                    setValue(option);
                    return;
                }
            });
        } else {
            setValue(null);
        }
    }, [param, options]);

    const handleSelection = (
        _: SyntheticEvent,
        selectedOption: Option | null,
    ) => {
        if (selectedOption && options) {
            const [matchedOption] = options.filter(
                (option) => option === selectedOption,
            );
            if (matchedOption) {
                navigate(`${route}/${matchedOption.route}`);
                setValue(matchedOption);
                return;
            }
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
            autoHighlight
            getOptionLabel={(o: Option) => o.label}
            isOptionEqualToValue={(o1: Option, o2: Option) =>
                o1.route === o2.route
            }
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
