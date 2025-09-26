import { AutocompleteProps } from '@mui/material';

import type { RoutePath } from '@constants';

export type Option = {
    label: string;
    route: string;
};

export type SearchBarProps = {
    route: RoutePath;
    options: Option[];
    val?: string; //The value of the parameter in /options?optionId=val
    selectionHandler: (optionId: string) => void;
};

export type ACProps = AutocompleteProps<Option, false, false, false>;
