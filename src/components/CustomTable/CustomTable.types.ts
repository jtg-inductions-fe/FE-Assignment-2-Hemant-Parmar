export type RowData = {
    content: string;
    caption: string;
    avatar?: string;
    value: number;
    format: (val: number) => string | React.ReactNode;
};

export type CustomTableProps = {
    users: RowData[];
};
