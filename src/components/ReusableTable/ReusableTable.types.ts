export type Column<T> = {
    key: keyof T | string;
    label: string;
    render?: (row: T) => React.ReactNode;
    hideOnMobile?: boolean;
};

export type ReusableTableProps<T> = {
    columns: Column<T>[];
    data: T[];
};
