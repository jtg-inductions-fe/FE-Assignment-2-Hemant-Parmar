import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import ErrorIcon from '@mui/icons-material/ErrorOutline';
import { useMediaQuery, useTheme } from '@mui/material';

import { CustomContainer, CustomTooltip } from '@components';
import { salesData } from '@data';
import { formatDateVariants } from '@utils';

type ChartDataItem = { dateShort: string; dateFull: string; sales: number };

export const Graph = () => {
    const theme = useTheme();
    const notMobileScreen = useMediaQuery(theme.breakpoints.up('sm'));

    const chartData: ChartDataItem[] = salesData.map((d) => {
        const { short, full } = formatDateVariants(d.date) as {
            short: string;
            full: string;
        };
        return {
            dateShort: short, // date format for the X axis
            dateFull: full, // date format for the tooltip
            sales: d.sales,
        };
    });

    return (
        <CustomContainer
            heading="Sales"
            icon={<ErrorIcon fontSize="small" color="warning" />}
        >
            <ResponsiveContainer height={500}>
                <LineChart
                    data={chartData}
                    margin={{ top: 30, right: 30, left: 20, bottom: 50 }}
                >
                    <CartesianGrid
                        strokeDasharray="0"
                        vertical={false}
                        color={theme.palette.action.hover}
                        strokeWidth={1}
                    />
                    <XAxis
                        dataKey="dateShort"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={36}
                        color={theme.palette.text.secondary}
                        fontSize={theme.typography.body2.fontSize}
                        angle={notMobileScreen ? 0 : -45}
                    />

                    <YAxis
                        tickCount={7}
                        width={notMobileScreen ? undefined : 0}
                        domain={[0, 240000]}
                        tickFormatter={(value) => `${value / 1000}K`}
                        axisLine={false}
                        tickLine={false}
                        tickMargin={72}
                        tick={{
                            color: theme.palette.text.secondary,
                            fontSize: theme.typography.body2.fontSize,
                            textAnchor: 'start',
                        }}
                    />

                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke={theme.palette.primary.main}
                        strokeWidth={3}
                        dot={{ r: 0 }}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </CustomContainer>
    );
};
