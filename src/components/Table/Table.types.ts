export type RowData = {
    id: string | number;
    content: string;
    caption: string;
    avatar?: string;
    value: number;
    format: (val: number) => string | React.ReactNode;
};

export type TableProps = {
    data: RowData[];
};
