import { AutocompleteProps } from '@mui/material';

import type { RoutePath } from '@constants';

export type Option = {
    label: string;
    route: string;
};

export type SearchBarProps = {
    route: RoutePath;
    options: Option[];
    param?: string; //The name of the parameter e.g. 'optionId' in /options/:optionId
};

export type ACProps = AutocompleteProps<Option, false, false, false>;
