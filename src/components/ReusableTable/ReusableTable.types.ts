import { ReactNode } from 'react';

export type Column<T> = {
    key: keyof T;
    category?: string; // If category is assigned, the formatter will be ignored
    label: string;
    formatter?: (data: T) => ReactNode;
    hideOnMobile?: boolean;
};

export type ReusableTableProps<T> = {
    columns: Column<T>[];
    data: T[];
};

export type Status = 'Completed' | 'In Progress' | 'Cancelled';
