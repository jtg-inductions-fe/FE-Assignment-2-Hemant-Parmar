/**
 * Represents the data structure for a single row in the table component.
 *
 * @property id - Unique identifier for the row.
 * @property content - Main content or label to display in the row.
 * @property caption - Additional descriptive text for the row.
 * @property [avatar] - Optional URL or path to an avatar image associated with the row.
 * @property value - Numeric value associated with the row, used for display or calculations.
 * @property valueFormatter - Function to display the numeric value in a format.
 */
export type RowData = {
    id: string | number;
    content: string;
    caption: string;
    avatar?: string;
    value: number;
    valueFormatter: (val: number) => string | React.ReactNode;
};

export type TableProps = {
    data: RowData[];
};
