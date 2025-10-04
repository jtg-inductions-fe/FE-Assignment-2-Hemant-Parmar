/**
 * Type definition for the payload passed to the custom tooltip component.
 * Used with the Recharts Tooltip API to display a tooltip in the sales chart.
 *
 * @property value - The sales value for the current data point.
 * @property payload - Object containing the details of the active 'ChartDataItem.
 * @property payload.dateShort - Short date format (e.g., 'Jan 1').
 * @property payload.dateFull - Full date format (e.g., '01 Jan 2024').
 * @property payload.sales - Sales number for the given date.
 */
export type Payload = {
    value: number;
    payload: {
        dateShort: string;
        dateFull: string;
        sales: number;
    };
};
