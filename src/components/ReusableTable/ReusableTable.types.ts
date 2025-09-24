export type Column = {
    key: string;
    label: string;
    hideOnMobile?: boolean;
};

export type ReusableTableProps<T> = {
    columns: Column[];
    data: T[];
};
