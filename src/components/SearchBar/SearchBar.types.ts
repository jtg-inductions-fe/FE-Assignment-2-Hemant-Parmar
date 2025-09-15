export type Option = {
    label: string;
    route: string;
};

export type SearchBarProps = {
    route: string;
    options: Option[];
    slug?: string;
};
