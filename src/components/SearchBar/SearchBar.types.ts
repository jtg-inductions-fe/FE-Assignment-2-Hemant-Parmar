import type { RoutePath } from '@constants';

export type Option = {
    label: string;
    route: string;
};

export type SearchBarProps = {
    route: RoutePath;
    options: Option[];
    slug?: string;
};
